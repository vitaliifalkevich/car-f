import React, { useEffect } from 'react'
import { ThemeProvider as OriginalThemeProvider } from 'styled-components'
import { useDispatch, useSelector } from 'react-redux'
import {
  selectThemeKey,
  themeSliceKey,
  reducer,
  defaultThemeKey,
  changeTheme,
} from './slice'
import { useInjectReducer } from 'redux-injectors'
import { themes } from './themes'

export const ThemeProvider = (props: { children: React.ReactChild }) => {
  const dispatch = useDispatch()
  useInjectReducer({ key: themeSliceKey, reducer })

  const defaultThemeMode = useSelector(defaultThemeKey)

  useEffect(() => {
    setTimeout(() => {
      dispatch(changeTheme(defaultThemeMode))
    }, 0)
  }, [defaultThemeMode, dispatch])

  const theme = useSelector(selectThemeKey)

  return (
    <OriginalThemeProvider
      theme={{ ...themes[theme], defaultTheme: defaultThemeMode }}
    >
      {React.Children.only(props.children)}
    </OriginalThemeProvider>
  )
}
