const lightTheme = {
  colors: {
    warning: '#F8F1EA',
    error: '#F8EAEA',
    textColor: 'rgba(0, 0, 0, 0.65)',
  },
}

const darkTheme: Theme = {
  colors: {
    warning: '#F8F1EA',
    error: '#F8EAEA',
    textColor: 'rgba(0, 0, 0, 0.65)',
  },
}

export type Theme = typeof lightTheme

export const themes = {
  light: lightTheme,
  dark: darkTheme,
}

export default themes
