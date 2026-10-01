const lightTheme = {
  colors: {
    textColor: '#bd2727',
  },
}

const darkTheme: Theme = {
  colors: {
    textColor: '#bd2727',
  },
}

export type Theme = typeof lightTheme

export const themes = {
  light: lightTheme,
  dark: darkTheme,
}

export default themes
