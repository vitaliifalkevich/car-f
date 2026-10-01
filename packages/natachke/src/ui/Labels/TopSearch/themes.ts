const lightTheme = {
  colors: {
    backgroundColor: '#24B80B',
    textColor: '#FFFFFF',
  },
}

const darkTheme: Theme = {
  colors: {
    backgroundColor: '#24B80B',
    textColor: '#FFFFFF',
  },
}

export type Theme = typeof lightTheme

export const themes = {
  light: lightTheme,
  dark: darkTheme,
}

export default themes
