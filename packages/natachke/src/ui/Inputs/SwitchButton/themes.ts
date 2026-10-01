const lightTheme: Theme = {
  colors: {
    textColor: '#727272',
    activeIconColor: '#24539B',
    defaultIconColor: 'rgb(121 126 136)',
    shadow:
      '0px 2px 1px -1px rgba(0, 0, 0, 0.2), 0px 1px 1px rgba(0, 0, 0, 0.14), 0px 1px 3px rgba(0, 0, 0, 0.12)',
    trackLine: 'rgb(242 242 242)',
    trackLineActive: 'rgb(35 83 155 / 30%)',
  },
}

const darkTheme = {
  colors: {
    textColor: '#727272',
    activeIconColor: '#24539B',
    defaultIconColor: 'rgb(121 126 136)',
    shadow:
      '0px 2px 1px -1px rgba(0, 0, 0, 0.2), 0px 1px 1px rgba(0, 0, 0, 0.14), 0px 1px 3px rgba(0, 0, 0, 0.12)',
    trackLine: 'rgb(242 242 242)',
    trackLineActive: 'rgb(35 83 155 / 30%)',
  },
}

export type Theme = typeof darkTheme

const themes = {
  light: lightTheme,
  dark: darkTheme,
}

export default themes
