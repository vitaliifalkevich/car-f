import { IStorage } from './types'
import getPersistState from './getPersistState'

const updateStorage = async (
  sliceKey: string,
  dispatchAction,
  storageName: IStorage,
) => {
  const response: any = await getPersistState(sliceKey, storageName)
  //@ts-ignore
  window.persistor.persist()
  if (!response?.data || !response._expiredAt) {
    dispatchAction()
  }
}

export default updateStorage
