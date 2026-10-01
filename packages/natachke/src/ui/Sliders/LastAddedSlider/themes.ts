const lightTheme = {
  colors: {
    sliderLeftMaskColor:
      'linear-gradient(90deg,rgb(255 255 255 / 80%) 0%,rgba(255,255,255,0) 100%),linear-gradient(90deg,rgb(255 255 255 / 80%) 70%,rgba(255,255,255,0) 100%)',
    sliderRightMaskColor:
      'linear-gradient(270deg,rgb(255 255 255 / 80%) 0%,rgba(255,255,255,0) 100%),linear-gradient(270deg,rgb(255 255 255 / 80%) 70%,rgba(255,255,255,0) 100%)',
  },
}

const darkTheme: Theme = {
  colors: {
    sliderLeftMaskColor:
      'linear-gradient(90deg,rgb(255 255 255 / 80%) 0%,rgba(255,255,255,0) 100%),linear-gradient(90deg,rgb(255 255 255 / 80%) 70%,rgba(255,255,255,0) 100%)',
    sliderRightMaskColor:
      'linear-gradient(270deg,rgb(255 255 255 / 80%) 0%,rgba(255,255,255,0) 100%),linear-gradient(270deg,rgb(255 255 255 / 80%) 70%,rgba(255,255,255,0) 100%)',
  },
}

export type Theme = typeof lightTheme

export const themes = {
  light: lightTheme,
  dark: darkTheme,
}

export default themes
