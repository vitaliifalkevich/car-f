const lightTheme = {
  colors: {
    lineColor: '#EEEDED',
  },
}

const darkTheme: Theme = {
  colors: {
    lineColor: '#EEEDED',
  },
}

export type Theme = typeof lightTheme

export const themes = {
  light: lightTheme,
  dark: darkTheme,
}

export default themes
