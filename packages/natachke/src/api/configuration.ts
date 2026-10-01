import { Configuration } from '@handber/natachke-api-client'
import { getAuthToken } from 'utils'
import config from 'config'
const { authToken } = config

export const setAPIConfiguration = (headers: any = {}): Configuration => ({
  basePath: `${config.apiServer}`,
  isJsonMime: () => true,
  accessToken: getAuthToken(authToken),
  baseOptions: {
    headers,
    withCredentials: true,
  },
})

export const setMessageAPIConfiguration = (): Configuration => ({
  basePath: `${config.messageApiServer}`,
  isJsonMime: () => true,
  accessToken: getAuthToken(authToken),
  baseOptions: {
    withCredentials: true,
  },
})
