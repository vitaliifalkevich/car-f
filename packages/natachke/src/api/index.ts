import {
  UserApi,
  CarApi,
  InitialApi,
  ImagesApi,
  ComplaintApi,
  ViewsApi,
  StatusApi,
  FavoritesApi,
  DepositApi,
  ServiceApi,
} from '@handber/natachke-api-client'
import FingerprintJS from '@fingerprintjs/fingerprintjs'
import {
  setAPIConfiguration,
} from './configuration'
import {
  CSRF_TOKEN_NOT_FOUND_MESSAGE,
  INVALID_CSRF_TOKEN_MESSAGE,
} from 'config'
const setCSRFToken = (csrf: string) => ({ 'XSRF-TOKEN': csrf })
const setRecaptchaToken = (token: string) => ({ 'g-recaptcha': token })

type CSRF_Recaptcha = { csrf?: string; recaptchaToken?: string }

export const getInitialApi = () => {
  return new InitialApi(setAPIConfiguration())
}

export const getUserApi = (data: CSRF_Recaptcha | undefined = {}) => {
  let headers = {}
  if ('csrf' in data && data?.csrf)
    headers = Object.assign(headers, setCSRFToken(data?.csrf))
  if ('recaptchaToken' in data && data?.recaptchaToken)
    headers = Object.assign(headers, setRecaptchaToken(data?.recaptchaToken))

  return new UserApi(setAPIConfiguration(headers))
}

export const getDepositApi = (data: CSRF_Recaptcha | undefined = {}) => {
  let headers = {}
  if ('csrf' in data && data?.csrf)
    headers = Object.assign(headers, setCSRFToken(data?.csrf))

  return new DepositApi(setAPIConfiguration(headers))
}

export const getServiceApi = (data: CSRF_Recaptcha | undefined = {}) => {
  let headers = {}
  if ('csrf' in data && data?.csrf)
    headers = Object.assign(headers, setCSRFToken(data?.csrf))

  return new ServiceApi(setAPIConfiguration(headers))
}

export const getCarApi = (data: CSRF_Recaptcha | undefined = {}) => {
  let headers = {}
  if ('csrf' in data && data?.csrf)
    headers = Object.assign(headers, setCSRFToken(data?.csrf))
  if ('recaptchaToken' in data && data?.recaptchaToken)
    headers = Object.assign(headers, setRecaptchaToken(data?.recaptchaToken))
  return new CarApi(setAPIConfiguration(headers))
}

export const getFavoritesApi = (csrf?: string) => {
  let headers = {}
  if (csrf) headers = setCSRFToken(csrf)
  return new FavoritesApi(setAPIConfiguration(headers))
}

export const getCarStatusApi = (csrf?: string) => {
  let headers = {}
  if (csrf) headers = setCSRFToken(csrf)
  return new StatusApi(setAPIConfiguration(headers))
}

export const getViewsApi = (csrf?: string) => {
  let headers = {}
  if (csrf) headers = setCSRFToken(csrf)
  return new ViewsApi(setAPIConfiguration(headers))
}

export const getComplainApi = (csrf?: string) => {
  let headers = {}
  if (csrf) headers = setCSRFToken(csrf)
  return new ComplaintApi(setAPIConfiguration(headers))
}

export const getImagesApi = (data: CSRF_Recaptcha | undefined = {}) => {
  let headers = {}
  if ('csrf' in data && data?.csrf)
    headers = Object.assign(headers, setCSRFToken(data?.csrf))
  if ('recaptchaToken' in data && data?.recaptchaToken)
    headers = Object.assign(headers, setRecaptchaToken(data?.recaptchaToken))

  return new ImagesApi(setAPIConfiguration(headers))
}

export const getFingerPrintVisitor = async (): Promise<string> => {
  const fpPromise = await FingerprintJS.load()
  const { visitorId } = await fpPromise.get()
  return visitorId
}

export const needToRestartSaga = (err, tryNumber?: number) => {
  const counter = tryNumber ? tryNumber : 1

  if (
    counter <= 5 &&
    err?.response?.data?.statusCode === 403 &&
    (err?.response?.data?.message === INVALID_CSRF_TOKEN_MESSAGE ||
      err?.response?.data?.message === CSRF_TOKEN_NOT_FOUND_MESSAGE)
  ) {
    return {
      restart: true,
      counter: counter + 1,
    }
  }
  return {
    restart: false,
  }
}
