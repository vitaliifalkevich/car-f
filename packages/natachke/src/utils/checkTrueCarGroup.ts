import { GROUPS } from '../config'

export const checkTrueCarGroup = groups => {
  if (!groups) return false
  return !!groups?.find(item => item.value === GROUPS.TRUE_CAR)
}
