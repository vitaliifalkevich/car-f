import { Reducer } from 'redux'
import { persistReducer } from 'redux-persist'
import { IPersist, IPersistDefaultParams } from './types'
import persistStorage from './storages'
import { getStateRewritePolicy } from './stateRewritePolicy'
import { applyMiddleWares } from './middlewares'
import { default as forcePersist } from './forcePersist'
export { default as updateStorage } from './updateStorage'

const initialParams: IPersistDefaultParams = {
  stateRewritePolicy: 'hardSet',
  expireSeconds: 3600,
}

export const makePersistReducer = ({
  reducer,
  key,
  storage,
  inputParams,
}: IPersist): Reducer => {
  const reducerParams: IPersistDefaultParams = {
    ...initialParams,
    ...inputParams,
  }
  const { stateRewritePolicy, expireSeconds } = reducerParams
  if (expireSeconds) applyMiddleWares({ key, storage, expireSeconds })

  const config = {
    key,
    storage: persistStorage[storage],
    stateRewritePolicy: getStateRewritePolicy(stateRewritePolicy),
  }
  forcePersist()
  return persistReducer(config, reducer)
}

export const preparePersistRootReducer = (reducer: Reducer): Reducer => {
  return makePersistReducer({
    reducer,
    key: 'root',
    storage: 'storage',
  })
}
