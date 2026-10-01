const lightTheme = {
  colors: {
    cardBackgroundActive: '#FFFFFF',
    cardBackground: '#EEEDED',
    borderColor: '#D6D9DA',
    textColor: '#727272',
  },
}

const darkTheme: Theme = {
  colors: {
    cardBackgroundActive: '#FFFFFF',
    cardBackground: '#EEEDED',
    borderColor: '#D6D9DA',
    textColor: '#727272',
  },
}

export type Theme = typeof lightTheme

export const themes = {
  light: lightTheme,
  dark: darkTheme,
}

export default themes
