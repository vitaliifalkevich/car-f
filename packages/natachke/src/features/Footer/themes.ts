const lightTheme = {
  colors: {
    backgroundColor: '#00182B',
    textColor: '#FFFFFF',
    copyrightColor: 'rgba(255, 255, 255, 0.57)',
    lineGradient:
      'radial-gradient(2250.13% 70573.44% at 46.66% -749.87%, rgba(255, 255, 255, 0.2) 0%, #00182A 100%)',
  },
}

const darkTheme: Theme = {
  colors: {
    backgroundColor: '#00182B',
    textColor: '#FFFFFF',
    copyrightColor: 'rgba(255, 255, 255, 0.57)',
    lineGradient:
      'radial-gradient(2250.13% 70573.44% at 46.66% -749.87%, rgba(255, 255, 255, 0.2) 0%, #00182A 100%)',
  },
}

export type Theme = typeof lightTheme

export const themes = {
  light: lightTheme,
  dark: darkTheme,
}

export default themes
