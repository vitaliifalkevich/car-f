const lightTheme = {
  colors: {
    textColor: '#000000',
  },
}

const darkTheme: Theme = {
  colors: {
    textColor: '#000000',
  },
}

export type Theme = typeof lightTheme

export const themes = {
  light: lightTheme,
  dark: darkTheme,
}

export default themes
