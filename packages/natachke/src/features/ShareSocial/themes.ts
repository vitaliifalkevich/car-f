const lightTheme = {
  colors: {
    textColor: 'rgba(0, 0, 0, 0.8)',
    copiedBackground: '#eeeded',
  },
}

const darkTheme: Theme = {
  colors: {
    textColor: 'rgba(0, 0, 0, 0.8)',
    copiedBackground: '#eeeded',
  },
}

export type Theme = typeof lightTheme

export const themes = {
  light: lightTheme,
  dark: darkTheme,
}

export default themes
