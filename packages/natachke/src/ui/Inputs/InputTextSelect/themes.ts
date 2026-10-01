const lightTheme: Theme = {
  colors: {
    titleColor: '#003760',
    selectMenuBackground: '#FFFFFF',
    selectMenuHoverBackground: '#F2F2F2',
    selectBackgroundActive: '#F2F2F2',
  },
}

const darkTheme = {
  colors: {
    titleColor: '#003760',
    selectMenuBackground: '#FFFFFF',
    selectMenuHoverBackground: '#F2F2F2',
    selectBackgroundActive: '#F2F2F2',
  },
}

export type Theme = typeof darkTheme

const themes = {
  light: lightTheme,
  dark: darkTheme,
}

export default themes
