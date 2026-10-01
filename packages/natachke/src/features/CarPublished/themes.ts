const lightTheme = {
  colors: {
    descriptionColor: '#000000',
    shareText: '#727272',
    shareLink: '#000000',
  },
}

const darkTheme: Theme = {
  colors: {
    descriptionColor: '#000000',
    shareText: '#727272',
    shareLink: '#000000',
  },
}

export type Theme = typeof lightTheme

export const themes = {
  light: lightTheme,
  dark: darkTheme,
}

export default themes
