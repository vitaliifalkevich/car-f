import { getStoredState } from 'redux-persist'
import persistStorage from './storages'
import { IStorage } from './types'

const getPersistConfig = (key: string, storage: IStorage) => ({
  key,
  storage: persistStorage[storage],
})

export const getPersistState = async (key, storage) =>
  await getStoredState(getPersistConfig(key, storage))

export default getPersistState
