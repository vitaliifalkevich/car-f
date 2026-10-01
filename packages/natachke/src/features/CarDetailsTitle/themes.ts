const lightTheme = {
  colors: {
    borderColor: '#EEEDED',
    titleColor: 'rgba(0, 0, 0, 0.8)',
  },
}

const darkTheme: Theme = {
  colors: {
    borderColor: '#EEEDED',
    titleColor: 'rgba(0, 0, 0, 0.8)',
  },
}

export type Theme = typeof lightTheme

export const themes = {
  light: lightTheme,
  dark: darkTheme,
}

export default themes
