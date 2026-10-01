const lightTheme = {
  colors: {
    buttonBackground: 'rgba(255,255,255,0.65)',
    counterColor: 'rgba(0, 0, 0, 0.65)',
    activeMiniPreviewColor: '#003760',
    navigationBackgroundGradientRight:
      'linear-gradient(270deg,#FBFBFB 5%,rgba(255,255,255,0) 100%)',
    navigationBackgroundGradientLeft:
      'linear-gradient(90deg,#FBFBFB 5%,rgba(255,255,255,0) 100%)',
  },
}

const darkTheme: Theme = {
  colors: {
    buttonBackground: 'rgba(255,255,255,0.65)',
    counterColor: 'rgba(0, 0, 0, 0.65)',
    activeMiniPreviewColor: '#003760',
    navigationBackgroundGradientRight:
      'linear-gradient(270deg,#FBFBFB 5%,rgba(255,255,255,0) 100%)',
    navigationBackgroundGradientLeft:
      'linear-gradient(90deg,#FBFBFB 5%,rgba(255,255,255,0) 100%)',
  },
}

export type Theme = typeof lightTheme

export const themes = {
  light: lightTheme,
  dark: darkTheme,
}

export default themes
