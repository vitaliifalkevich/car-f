const lightTheme = {
  colors: {
    blockBackground: '#EEEDED',
  },
}

const darkTheme: Theme = {
  colors: {
    blockBackground: '#EEEDED',
  },
}

export type Theme = typeof lightTheme

export const themes = {
  light: lightTheme,
  dark: darkTheme,
}

export default themes
