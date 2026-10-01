const getAuthToken = (key: string): string => {
  return localStorage.getItem(key) || sessionStorage.getItem(key) || ''
}

export default getAuthToken
