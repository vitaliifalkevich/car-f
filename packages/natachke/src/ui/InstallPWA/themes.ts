const lightTheme = {
  colors: {
    background: '#FFFFFF',
    textColor: 'rgba(0, 0, 0, 0.6)',
    borderColor: '#EEEDED',
    closeBackground: '#F2F2F2',
  },
}

const darkTheme: Theme = {
  colors: {
    background: '#FFFFFF',
    textColor: 'rgba(0, 0, 0, 0.6)',
    borderColor: '#EEEDED',
    closeBackground: '#F2F2F2',
  },
}

export type Theme = typeof lightTheme

export const themes = {
  light: lightTheme,
  dark: darkTheme,
}

export default themes
