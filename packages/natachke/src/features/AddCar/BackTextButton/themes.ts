const lightTheme: Theme = {
  colors: {
    textColor: 'rgba(0, 0, 0, 0.4)',
  },
}

const darkTheme = {
  colors: {
    textColor: 'rgba(0, 0, 0, 0.4)',
  },
}

export type Theme = typeof darkTheme

const themes = {
  light: lightTheme,
  dark: darkTheme,
}

export default themes
