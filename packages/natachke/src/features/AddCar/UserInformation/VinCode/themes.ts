const lightTheme: Theme = {
  colors: {
    background: '#EEEDED',
    headerColor: '#6D6D6D',
    textColor: 'rgba(0, 0, 0, 0.6)',
    inputBorderColor: 'rgba(156, 156, 156, 0.2)',
  },
}

const darkTheme = {
  colors: {
    background: '#EEEDED',
    headerColor: '#6D6D6D',
    textColor: 'rgba(0, 0, 0, 0.6)',
    inputBorderColor: 'rgba(156, 156, 156, 0.2)',
  },
}

export type Theme = typeof darkTheme

const themes = {
  light: lightTheme,
  dark: darkTheme,
}

export default themes
