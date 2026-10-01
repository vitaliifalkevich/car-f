const lightTheme = {
  colors: {
    textColor: '#A90707',
  },
}

const darkTheme: Theme = {
  colors: {
    textColor: '#A90707',
  },
}

export type Theme = typeof lightTheme

export const themes = {
  light: lightTheme,
  dark: darkTheme,
}

export default themes
