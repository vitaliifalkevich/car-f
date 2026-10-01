const lightTheme = {
  colors: {
    textColor: '#323232',
    dropDownColor: '#003760',
  },
}

const darkTheme: Theme = {
  colors: {
    textColor: '#323232',
    dropDownColor: '#003760',
  },
}

export type Theme = typeof lightTheme

export const themes = {
  light: lightTheme,
  dark: darkTheme,
}

export default themes
