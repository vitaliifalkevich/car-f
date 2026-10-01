import currency from './currency'
import countries from './countries'
import local from 'environment/local.json'
import production from 'environment/production.json'
import { socketEvents } from './socketEvents'
export * from './languages'
const stage = process.env.REACT_APP_CUSTOM_NODE_ENV

const environmentByStage = {
  production,
  local,
}

export const env =
  environmentByStage[process.env.REACT_APP_CUSTOM_NODE_ENV || '']

export const CSRF_TOKEN_NOT_FOUND_MESSAGE = 'CSRF token not found'
export const INVALID_CSRF_TOKEN_MESSAGE = 'Invalid CSRF Token'

export enum IMAGE_SiZES {
  XS = 'xs',
  SM = 'sm',
  MD = 'md',
  LG = 'lg',
}

export const SHOW_PER_PAGE_DEFAULT = 20
export const DEFAULT_ACTIVE_PAGE = 1
export const SHOW_PER_PAGE_MESSAGES = 10

export enum GROUPS {
  TRUE_CAR = 'trueCar',
  WITH_COMPLAINTS = 'withComplaints',
  TOP_CATALOG = 'topCatalog',
  TOP_SEARCH = 'topSearch',
}

export enum CREATE_CAR_TYPE {
  CREATE = 'create',
  EDIT = 'edit',
}

export enum EXCEPTIONS {
  ON_REVIEW = 'on_review',
}

export const COMPLAINT_IN_CHAT_DEFAULT_TEXT =
  'default complaint for user from chat'

export const WALLET = 'wallet'

export * from './payments'

const config = {
  authToken: 'authToken',
  visitor: 'visitor',
  apiServer: env?.apiServer,
  messageApiServer: env?.messageApiServer,
  websocketApiURL: env?.websocketApiServer,
  recaptchaPublicKey: env?.recaptchaPublicKey,
  phone_crypto_code: env?.phone_crypto_code,
  kwtToHorsePower: 1.36,
  horsePowerToKwt: 0.7355,
  currentCountryCode: String(env?.currentCountryCode),
  defaultPhoneCode: String(env?.defaultPhoneCode),
  car_type: 'passenger',
  isDevelopMode: stage !== 'production' && stage !== 'mirror',
  getLangConfigForRouter: () => {
    return `/:lang([a-z]{2})?`
  },
  minImagesToBeUploaded: 3,
  maxImagesToBeUploaded: 50,
  currency,
  countries,
  socketEvents,
}

export default config
