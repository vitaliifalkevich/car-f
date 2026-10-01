const lightTheme = {
  colors: {
    blockBackground: '#EEEDED',
    textColor: 'rgba(0, 0, 0, 0.65)',
  },
}

const darkTheme: Theme = {
  colors: {
    blockBackground: '#EEEDED',
    textColor: 'rgba(0, 0, 0, 0.65)',
  },
}

export type Theme = typeof lightTheme

export const themes = {
  light: lightTheme,
  dark: darkTheme,
}

export default themes
