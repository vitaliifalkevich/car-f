const lightTheme = {
  colors: {
    textColor: 'rgb(51 51 52)',
  },
}

const darkTheme: Theme = {
  colors: {
    textColor: 'rgb(51 51 52)',
  },
}

export type Theme = typeof lightTheme

export const themes = {
  light: lightTheme,
  dark: darkTheme,
}

export default themes
