const lightTheme: Theme = {
  colors: {
    labelColor: '#727272',
  },
}

const darkTheme = {
  colors: {
    labelColor: '#727272',
  },
}

export type Theme = typeof darkTheme

const themes = {
  light: lightTheme,
  dark: darkTheme,
}

export default themes
