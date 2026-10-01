const lightTheme = {
  colors: {
    titleColor: '#000000',
    descriptionColor: '#727272',
    textColor: '#727272',
  },
}

const darkTheme: Theme = {
  colors: {
    titleColor: '#000000',
    descriptionColor: '#727272',
    textColor: '#727272',
  },
}

export type Theme = typeof lightTheme

export const themes = {
  light: lightTheme,
  dark: darkTheme,
}

export default themes
