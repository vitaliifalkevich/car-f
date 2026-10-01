const lightTheme = {
  colors: {
    background: '#C4C4C4',
  },
}

const darkTheme: Theme = {
  colors: {
    background: '#C4C4C4',
  },
}

export type Theme = typeof lightTheme

export const themes = {
  light: lightTheme,
  dark: darkTheme,
}

export default themes
