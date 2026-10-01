const lightTheme = {
  colors: {
    textColor: 'rgba(111, 111, 111, 1)',
  },
}

const darkTheme: Theme = {
  colors: {
    textColor: 'rgba(111, 111, 111, 1)',
  },
}

export type Theme = typeof lightTheme

export const themes = {
  light: lightTheme,
  dark: darkTheme,
}

export default themes
