const lightTheme: Theme = {
  colors: {
    labelColor: '#727272',
    backgroundColor: '#F2F2F2',
  },
}

const darkTheme = {
  colors: {
    labelColor: '#727272',
    backgroundColor: '#F2F2F2',
  },
}

export type Theme = typeof darkTheme

const themes = {
  light: lightTheme,
  dark: darkTheme,
}

export default themes
