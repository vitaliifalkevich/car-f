const lightTheme = {
  colors: {
    textColor: '#FFFFFF',
  },
}

const darkTheme: Theme = {
  colors: {
    textColor: '#FFFFFF',
  },
}

export type Theme = typeof lightTheme

export const themes = {
  light: lightTheme,
  dark: darkTheme,
}

export default themes
