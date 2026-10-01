const lightTheme = {
  colors: {
    success: '#25b80c',
  },
}

const darkTheme: Theme = {
  colors: {
    success: '#25b80c',
  },
}

export type Theme = typeof lightTheme

export const themes = {
  light: lightTheme,
  dark: darkTheme,
}

export default themes
