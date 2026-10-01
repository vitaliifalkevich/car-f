import { STORAGE_TYPES } from './types'

const setAuthToken = (key, value, type) => {
  if (type === STORAGE_TYPES.SESSION) sessionStorage.setItem(key, value)
  else localStorage.setItem(key, value)
}

export default setAuthToken
