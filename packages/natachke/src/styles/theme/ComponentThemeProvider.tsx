import React from 'react'
import { ThemeProvider as OriginalThemeProvider } from 'styled-components'
import { useSelector } from 'react-redux'
import { selectThemeKey, defaultThemeKey } from './slice'

interface ProviderProps<T> {
  children: React.ReactChild
  themes: T
}

const ComponentThemeProvider = <T extends object>(props: ProviderProps<T>) => {
  const themeMode = useSelector(selectThemeKey)
  const defaultThemeMode = useSelector(defaultThemeKey)
  return (
    <OriginalThemeProvider
      theme={props.themes?.[themeMode] || props.themes[defaultThemeMode]}
    >
      {React.Children.only(props.children)}
    </OriginalThemeProvider>
  )
}

export default ComponentThemeProvider
