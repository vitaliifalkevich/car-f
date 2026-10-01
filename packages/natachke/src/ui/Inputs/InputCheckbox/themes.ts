const lightTheme: Theme = {
  colors: {
    checkedColor: '#24539B',
    defaultColor: '#979797',
    textColor: ' rgba(0, 0, 0, 0.4)',
  },
}

const darkTheme = {
  colors: {
    checkedColor: '#24539B',
    defaultColor: '#979797',
    textColor: ' rgba(0, 0, 0, 0.4)',
  },
}

export type Theme = typeof darkTheme

const themes = {
  light: lightTheme,
  dark: darkTheme,
}

export default themes
