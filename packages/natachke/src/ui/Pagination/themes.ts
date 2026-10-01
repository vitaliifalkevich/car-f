const lightTheme = {
  colors: {
    defaultTextColor: 'rgba(0, 0, 0, 0.87)',
    arrowHoverColor: '#003760',
    numberHoverTextColor: '#FFFFFF',
    arrowBackgroundHover: '#F0F0F0',
    numberHoverBackground: '#003760',
  },
}

const darkTheme: Theme = {
  colors: {
    defaultTextColor: 'rgba(0, 0, 0, 0.87)',
    arrowHoverColor: '#003760',
    numberHoverTextColor: '#FFFFFF',
    arrowBackgroundHover: '#F0F0F0',
    numberHoverBackground: '#003760',
  },
}

export type Theme = typeof lightTheme

export const themes = {
  light: lightTheme,
  dark: darkTheme,
}

export default themes
