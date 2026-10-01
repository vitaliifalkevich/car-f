import { Reducer } from 'redux'

export type IStateRewritePolicy =
  | 'hardSet'
  | 'autoMergeLevel1'
  | 'autoMergeLevel2'

export interface IPersistDefaultParams {
  stateRewritePolicy: IStateRewritePolicy
  expireSeconds: number | null
}
export interface IPersistParams {
  stateRewritePolicy?: IStateRewritePolicy
  expireSeconds?: number | null
}
export type IStorage = 'storage' | 'storageSession'
export interface IPersist {
  reducer: Reducer
  key: string
  storage: IStorage
  transforms?: any
  inputParams?: IPersistParams
}
