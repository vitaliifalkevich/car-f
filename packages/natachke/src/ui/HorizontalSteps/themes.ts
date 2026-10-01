const lightTheme = {
  colors: {
    activeColor: '#24539B',
    defaultColor: 'rgba(0, 0, 0, 0.38)',
    iconColor: '#FFFFFF',
    textColor: 'rgba(0, 0, 0, 0.6)',
    lineColor: '#BDBDBD',
  },
}

const darkTheme: Theme = {
  colors: {
    activeColor: '#24539B',
    defaultColor: 'rgba(0, 0, 0, 0.38)',
    iconColor: '#FFFFFF',
    textColor: 'rgba(0, 0, 0, 0.6)',
    lineColor: '#BDBDBD',
  },
}

export type Theme = typeof lightTheme

export const themes = {
  light: lightTheme,
  dark: darkTheme,
}

export default themes
