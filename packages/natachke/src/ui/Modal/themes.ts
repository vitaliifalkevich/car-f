const lightTheme: Theme = {
  colors: {
    backgroundColor: '#FFFFFF',
    maskBackground: 'rgb(0 0 0 / 60%)',
    closeBackground: '#F2F2F2',
    modalShadow: '#000000',
  },
}

const darkTheme = {
  colors: {
    backgroundColor: '#FFFFFF',
    maskBackground: 'rgb(0 0 0 / 60%)',
    closeBackground: '#F2F2F2',
    modalShadow: '#000000',
  },
}

export type Theme = typeof darkTheme

const themes = {
  light: lightTheme,
  dark: darkTheme,
}

export default themes
