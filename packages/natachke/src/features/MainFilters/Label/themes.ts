const lightTheme: Theme = {
  colors: {
    labelLightColor: 'rgba(255, 255, 255, 0.7)',
  },
}

const darkTheme = {
  colors: {
    labelLightColor: 'rgba(255, 255, 255, 0.7)',
  },
}

export type Theme = typeof darkTheme

const themes = {
  light: lightTheme,
  dark: darkTheme,
}

export default themes
