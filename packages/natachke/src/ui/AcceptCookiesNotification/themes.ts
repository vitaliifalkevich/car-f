const lightTheme = {
  colors: {
    background: '#FFFFFF',
    textColor: 'rgba(0, 0, 0, 0.6)',
    borderColor: '#EEEDED',
  },
}

const darkTheme: Theme = {
  colors: {
    background: '#FFFFFF',
    textColor: 'rgba(0, 0, 0, 0.6)',
    borderColor: '#EEEDED',
  },
}

export type Theme = typeof lightTheme

export const themes = {
  light: lightTheme,
  dark: darkTheme,
}

export default themes
