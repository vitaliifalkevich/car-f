const lightTheme = {
  colors: {
    carTitle: '#003760',
    description: 'rgba(0, 0, 0, 0.65)',
    descriptionPoint: 'rgb(184 181 181)',
    priceColor: '#000000',
    textColor: 'rgba(0, 0, 0, 0.65)',
    topSearchBorder: '#C4C4C4',
  },
}

const darkTheme: Theme = {
  colors: {
    carTitle: '#003760',
    description: 'rgba(0, 0, 0, 0.65)',
    descriptionPoint: 'rgb(184 181 181)',
    priceColor: '#000000',
    textColor: 'rgba(0, 0, 0, 0.65)',
    topSearchBorder: '#C4C4C4',
  },
}

export type Theme = typeof lightTheme

export const themes = {
  light: lightTheme,
  dark: darkTheme,
}

export default themes
