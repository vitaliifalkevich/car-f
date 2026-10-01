import { useCallback } from 'react'
import { useLocation } from 'react-router-dom'

export const useGenerateFullURL = () => {
  const location = useLocation()

  return useCallback(
    (path: string | null) => {
      return `${window.location.href.replace(location.pathname, '')}/${
        path ?? ''
      }`
    },
    [location.pathname],
  )
}

export const useGenerateCarFullURL = () => {
  const generateFullURL = useGenerateFullURL()
  return useCallback((path: string | null) => generateFullURL(`cars/${path}`), [
    generateFullURL,
  ])
}
