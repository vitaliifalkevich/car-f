const lightTheme = {
  colors: {
    green: '#24B80B',
    greenHover: '#1CA805',
    greenActive: '#149200',
    blue: '#24539B',
    blueHover: '#1f4a8c',
    blueActive: '#174489',
    grey: '#F2F2F2',
    greyHover: '#eeeded',
    greyActive: '#e2e4e5',
    lightTextColor: '#FFFFFF',
    darkTextColor: '#6D6D6D',
  },
}

const darkTheme: Theme = {
  colors: {
    green: '#24B80B',
    greenHover: '#1CA805',
    greenActive: '#149200',
    blue: '#24539B',
    blueHover: '#1f4a8c',
    blueActive: '#174489',
    grey: '#F2F2F2',
    greyHover: '#eeeded',
    greyActive: '#e2e4e5',
    lightTextColor: '#FFFFFF',
    darkTextColor: '#6D6D6D',
  },
}

export type Theme = typeof lightTheme

export const themes = {
  light: lightTheme,
  dark: darkTheme,
}

export default themes
