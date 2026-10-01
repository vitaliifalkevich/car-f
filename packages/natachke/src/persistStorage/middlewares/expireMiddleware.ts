import { createPersistoid } from 'redux-persist'
import { IStorage } from '../types'
import persistStorage from '../storages'
import getPersistState from '../getPersistState'
import { isAfter, addSeconds } from 'date-fns'

const checkExpired = date => {
  if (!date) return false
  return isAfter(new Date(), new Date(date))
}

const getExpireDate = expireSeconds => {
  return addSeconds(new Date(), expireSeconds)
}

const expireMiddleware = ({ key, storage, expireSeconds = 3600 }) => {
  const getPersistConfig = (key: string, storage: IStorage) => ({
    key,
    storage: persistStorage[storage],
  })

  getPersistState(key, storage).then((res: any) => {
    const { update } = createPersistoid(getPersistConfig(key, storage))
    const expireValueFromStorage = res?._expiredAt
    if (!expireValueFromStorage && res?.data) {
      update({
        ...res,
        _expiredAt: getExpireDate(expireSeconds),
      })
    }
    if (checkExpired(expireValueFromStorage))
      update({
        _persist: res._persist,
        _expiredAt: getExpireDate(expireSeconds),
      })
  })
}

export default expireMiddleware
