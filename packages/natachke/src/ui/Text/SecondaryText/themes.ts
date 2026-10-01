const lightTheme = {
  colors: {
    textColor: '#727272',
  },
}

const darkTheme: Theme = {
  colors: {
    textColor: '#727272',
  },
}

export type Theme = typeof lightTheme

export const themes = {
  light: lightTheme,
  dark: darkTheme,
}

export default themes
