const lightTheme = {
  colors: {
    cardBackground: '#FFFFFF',
  },
}

const darkTheme: Theme = {
  colors: {
    cardBackground: '#FFFFFF',
  },
}

export type Theme = typeof lightTheme

export const themes = {
  light: lightTheme,
  dark: darkTheme,
}

export default themes
