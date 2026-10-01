const lightTheme = {
  fonts: {
    ralewayRegular: 'Raleway-Regular, sans-serif',
    ralewaySemibold: 'Raleway-Semibold, sans-serif',
    ralewayBold: 'Raleway-Bold, sans-serif',
  },
  mode: 'light',
}

const darkTheme: Theme = {
  fonts: {
    ralewayRegular: 'Raleway-Regular, sans-serif',
    ralewaySemibold: 'Raleway-Semibold, sans-serif',
    ralewayBold: 'Raleway-Bold, sans-serif',
  },
  mode: 'dark',
}

export type Theme = typeof lightTheme

export const themes = {
  light: lightTheme,
  dark: darkTheme,
}

export default themes
