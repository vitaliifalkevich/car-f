const lightTheme = {
  colors: {
    blue: '#003760',
    blueHover: '#013156',
    blueActive: '#002541',
    green: '#24B80B',
    greenHover: '#1CA805',
    greenActive: '#149200',
    textColor: '#FFFFFF',
  },
}

const darkTheme: Theme = {
  colors: {
    blue: '#003760',
    blueHover: '#013156',
    blueActive: '#002541',
    green: '#24B80B',
    greenHover: '#1CA805',
    greenActive: '#149200',
    textColor: '#FFFFFF',
  },
}

export type Theme = typeof lightTheme

export const themes = {
  light: lightTheme,
  dark: darkTheme,
}

export default themes
