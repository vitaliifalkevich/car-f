const lightTheme = {
  colors: {
    linkColor: '#003760',
  },
}

const darkTheme: Theme = {
  colors: {
    linkColor: '#003760',
  },
}

export type Theme = typeof lightTheme

export const themes = {
  light: lightTheme,
  dark: darkTheme,
}

export default themes
