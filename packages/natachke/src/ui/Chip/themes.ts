const lightTheme = {
  colors: {
    textColor: '#FFFFFF',
    backgroundColor: '#24539B',
    removeButtonActiveColor: '#003760',
  },
}

const darkTheme: Theme = {
  colors: {
    textColor: '#FFFFFF',
    backgroundColor: '#24539B',
    removeButtonActiveColor: '#003760',
  },
}

export type Theme = typeof lightTheme

export const themes = {
  light: lightTheme,
  dark: darkTheme,
}

export default themes
