const lightTheme = {
  colors: {
    textColor: 'rgba(0, 0, 0, 0.65)',
    blue: '#003760',
    priceMobileColor: '#585858',
  },
}

const darkTheme: Theme = {
  colors: {
    textColor: 'rgba(0, 0, 0, 0.65)',
    blue: '#003760',
    priceMobileColor: '#585858',
  },
}

export type Theme = typeof lightTheme

export const themes = {
  light: lightTheme,
  dark: darkTheme,
}

export default themes
