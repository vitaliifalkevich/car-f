const lightTheme: Theme = {
  colors: {
    textColor: '#727272',
  },
}

const darkTheme = {
  colors: {
    textColor: '#727272',
  },
}

export type Theme = typeof darkTheme

const themes = {
  light: lightTheme,
  dark: darkTheme,
}

export default themes
