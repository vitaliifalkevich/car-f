import { GROUPS } from '../config'

export const checkTopSearchCarGroup = groups => {
  if (!groups) return false
  return !!groups?.find(item => item.value === GROUPS.TOP_SEARCH)
}
