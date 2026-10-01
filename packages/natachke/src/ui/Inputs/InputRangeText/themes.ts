const lightTheme: Theme = {
  colors: {
    titleColor: '#0E172E',
    inputBackgroundColor: '#F2F2F2',
    dividedLineColor: 'rgba(0, 0, 0, 0.2)',
  },
}

const darkTheme = {
  colors: {
    titleColor: '#0E172E',
    inputBackgroundColor: '#F2F2F2',
    dividedLineColor: 'rgba(0, 0, 0, 0.2)',
  },
}

export type Theme = typeof darkTheme

const themes = {
  light: lightTheme,
  dark: darkTheme,
}

export default themes
