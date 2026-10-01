const lightTheme = {
  colors: {
    uploadBackground: '#24539B',
    defaultLabel: '#24539B',
    textColor: '#FFFFFF',
    activeLabelBackground: '#24B80B',
    deleteBackground: 'rgba(0, 0, 0, 0.5)',
    darkMask: 'rgba(0, 0, 0, 0.2)',
  },
}

const darkTheme: Theme = {
  colors: {
    uploadBackground: '#24539B',
    defaultLabel: '#24539B',
    textColor: '#FFFFFF',
    activeLabelBackground: '#24B80B',
    deleteBackground: 'rgba(0, 0, 0, 0.5)',
    darkMask: 'rgba(0, 0, 0, 0.2)',
  },
}

export type Theme = typeof lightTheme

export const themes = {
  light: lightTheme,
  dark: darkTheme,
}

export default themes
