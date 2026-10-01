const lightTheme = {
  colors: {
    cardBackground: '#F3F3F3',
    cardBackgroundHover: '#FFFFFF',
  },
}

const darkTheme: Theme = {
  colors: {
    cardBackground: '#F3F3F3',
    cardBackgroundHover: '#FFFFFF',
  },
}

export type Theme = typeof lightTheme

export const themes = {
  light: lightTheme,
  dark: darkTheme,
}

export default themes
