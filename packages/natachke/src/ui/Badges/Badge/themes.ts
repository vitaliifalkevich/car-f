const lightTheme = {
  colors: {
    backgroundColor: '#003760',
    tooltipTextColor: '#000000',
  },
}

const darkTheme: Theme = {
  colors: {
    backgroundColor: '#003760',
    tooltipTextColor: '#000000',
  },
}

export type Theme = typeof lightTheme

export const themes = {
  light: lightTheme,
  dark: darkTheme,
}

export default themes
