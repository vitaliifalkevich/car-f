const lightTheme = {
  colors: {
    titleColor: 'rgba(0, 0, 0, 0.8)',
    descriptionColor: 'rgba(111, 111, 111, 1)',
    secondDescription: '#6F6F6F',
    linkColor: '#FFFFFF',
  },
}

const darkTheme: Theme = {
  colors: {
    titleColor: 'rgba(0, 0, 0, 0.8)',
    descriptionColor: 'rgba(111, 111, 111, 1)',
    secondDescription: '#6F6F6F',
    linkColor: '#FFFFFF',
  },
}

export type Theme = typeof lightTheme

export const themes = {
  light: lightTheme,
  dark: darkTheme,
}

export default themes
