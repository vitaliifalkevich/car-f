const lightTheme = {
  colors: {
    titleColor: '#000000',
  },
}

const darkTheme: Theme = {
  colors: {
    titleColor: '#000000',
  },
}

export type Theme = typeof lightTheme

export const themes = {
  light: lightTheme,
  dark: darkTheme,
}

export default themes
