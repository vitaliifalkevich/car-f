const lightTheme = {
  colors: {
    borderColor: '#EEEDED',
  },
}

const darkTheme: Theme = {
  colors: {
    borderColor: '#EEEDED',
  },
}

export type Theme = typeof lightTheme

export const themes = {
  light: lightTheme,
  dark: darkTheme,
}

export default themes
