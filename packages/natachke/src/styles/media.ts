import { css } from 'styled-components'

export const sizes = {
  mobile: [0, 768],
  tablet: [768, 1280],
  l: [1280, 1440],
  xl: [1440],
}

export const getMediaRule = (label: Array<number>, withoutMediaKey = false) => {
  if (label[1])
    return `${!withoutMediaKey ? '@media ' : ''}(min-width: ${
      label[0]
    }px) and (max-width: ${label[1]}px)`
  return `${!withoutMediaKey ? '@media ' : ''}(min-width: ${label[0]}px)`
}
// Iterate through the sizes and create a media template
export const media = (Object.keys(sizes) as Array<keyof typeof sizes>).reduce(
  (acc, label) => {
    acc[label] = (first: any, ...interpolations: any[]) => css`
      ${getMediaRule(sizes[label])} {
        ${css(first, ...interpolations)}
      }
    `
    return acc
  },
  {} as { [key in keyof typeof sizes]: any },
)
