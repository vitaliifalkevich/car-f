const lightTheme = {
  colors: {
    backgroundColor: '#EEEDED',
    mainColor: '#003760',
    textColor: '#414042',
  },
}

const darkTheme: Theme = {
  colors: {
    backgroundColor: '#EEEDED',
    mainColor: '#003760',
    textColor: '#414042',
  },
}

export type Theme = typeof lightTheme

export const themes = {
  light: lightTheme,
  dark: darkTheme,
}

export default themes
