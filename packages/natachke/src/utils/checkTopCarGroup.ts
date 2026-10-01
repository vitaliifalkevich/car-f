import { GROUPS } from '../config'

export const checkTopCarGroup = groups => {
  if (!groups) return false
  return !!groups?.find(item => item.value === GROUPS.TOP_CATALOG)
}
