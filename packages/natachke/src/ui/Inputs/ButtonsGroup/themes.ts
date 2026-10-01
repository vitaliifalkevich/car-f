const lightTheme: Theme = {
  colors: {
    border: 'rgba(0, 0, 0, 0.2)',
    text: 'rgba(0, 0, 0, 0.53)',
    background: '#F2F2F2',
    activeBackground: '#24539B',
    activeText: '#FFFFFF',
  },
}

const darkTheme = {
  colors: {
    border: 'rgba(0, 0, 0, 0.2)',
    text: 'rgba(0, 0, 0, 0.53)',
    background: '#F2F2F2',
    activeBackground: '#24539B',
    activeText: '#FFFFFF',
  },
}

export type Theme = typeof darkTheme

const themes = {
  light: lightTheme,
  dark: darkTheme,
}

export default themes
