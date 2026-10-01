import React, { useState, useEffect, createContext, useContext } from 'react'
import { getMediaRule } from 'styles/media'

const prepareQueries = (keys: Array<any>, queries) => {
  return keys.reduce((acc, key) => {
    acc[key] = getMediaRule(queries[key], true)
    return acc
  }, {})
}

const defaultValue = {}

const BreakpointContext = createContext(defaultValue)

const MediaQueriesProvider = ({ children, queries }) => {
  const [queryMatch, setQueryMatch] = useState({})

  useEffect(() => {
    const mediaQueryLists = {}
    const keys = Object.keys(queries)
    const preparedQueries = prepareQueries(keys, queries)
    let isAttached = false

    const handleQueryListener = () => {
      const updatedMatches = keys.reduce((acc, media) => {
        acc[media] = !!(
          mediaQueryLists[media] && mediaQueryLists[media].matches
        )
        return acc
      }, {})
      setQueryMatch(updatedMatches)
    }

    if (window && window.matchMedia) {
      const matches = {}
      keys.forEach(media => {
        if (typeof preparedQueries[media] === 'string') {
          mediaQueryLists[media] = window.matchMedia(preparedQueries[media])
          matches[media] = mediaQueryLists[media].matches
        } else {
          matches[media] = false
        }
      })
      setQueryMatch(matches)
      isAttached = true
      keys.forEach(media => {
        if (typeof preparedQueries[media] === 'string') {
          mediaQueryLists[media].addListener(handleQueryListener)
        }
      })
    }

    return () => {
      if (isAttached) {
        keys.forEach(media => {
          if (typeof preparedQueries[media] === 'string') {
            mediaQueryLists[media].removeListener(handleQueryListener)
          }
        })
      }
    }
  }, [queries])

  return (
    <BreakpointContext.Provider value={queryMatch}>
      {children}
    </BreakpointContext.Provider>
  )
}

function useBreakpoint(): any {
  const context = useContext(BreakpointContext)
  if (context === defaultValue) {
    throw new Error('useBreakpoint must be used within MediaQueriesProvider')
  }
  return context
}
export { useBreakpoint, MediaQueriesProvider }
