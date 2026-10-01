const lightTheme: Theme = {
  colors: {
    titleColor: '#0E172E',
    inputSelectBackgroundColor: '#F2F2F2',
    inputSelectBorderColorHover: '#cbcbcb',
    selectMenuBackground: '#FFFFFF',
    selectMenuHoverColor: '#0E172E',
    selectMenuHoverBackground: '#F2F2F2',
    selectBackgroundActive: '#F2F2F2',
    chosenValueColor: '#0E172E',
    lineColor: 'rgba(0, 0, 0, 0.05)',
    multiSelectLabelBackground: '#24539b',
    multiSelectLabelColor: '#FFFFFF',
    multiSelectLabelRemoveBG: '#003760',
  },
}

const darkTheme = {
  colors: {
    titleColor: '#0E172E',
    inputSelectBackgroundColor: '#F2F2F2',
    inputSelectBorderColorHover: '#cbcbcb',
    selectMenuBackground: '#FFFFFF',
    selectMenuHoverColor: '#0E172E',
    selectMenuHoverBackground: '#F2F2F2',
    selectBackgroundActive: '#F2F2F2',
    chosenValueColor: '#0E172E',
    lineColor: 'rgba(0, 0, 0, 0.05)',
    multiSelectLabelBackground: '#24539b',
    multiSelectLabelColor: '#FFFFFF',
    multiSelectLabelRemoveBG: '#003760',
  },
}

export type Theme = typeof darkTheme

const themes = {
  light: lightTheme,
  dark: darkTheme,
}

export default themes
