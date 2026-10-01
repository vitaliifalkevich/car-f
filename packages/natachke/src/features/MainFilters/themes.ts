const lightTheme = {
  colors: {
    backgroundColor: '#003760',
  },
}

const darkTheme: Theme = {
  colors: {
    backgroundColor: '#003760',
  },
}

export type Theme = typeof lightTheme

export const themes = {
  light: lightTheme,
  dark: darkTheme,
}

export default themes
