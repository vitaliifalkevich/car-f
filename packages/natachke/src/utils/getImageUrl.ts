import config from 'config'
export const getImageUrl = (url: string): string =>
  `${config.apiServer}/media/${url}`

export const getCarImageUrl = (url?: string, size?: string): string =>
  `${config.apiServer}/media/${url}/${size}/${url}.jpg`
