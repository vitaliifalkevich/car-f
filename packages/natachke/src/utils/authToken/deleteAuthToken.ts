const deleteAuthToken = (key: string) => {
  sessionStorage.removeItem(key)
  localStorage.removeItem(key)
}

export default deleteAuthToken
