import { useInjectReducer } from 'redux-injectors'
import { reducer, sliceKey } from './slice'
import { makePersistReducer } from 'persistStorage'

const useInjectNotes = () => {
  useInjectReducer({
    key: sliceKey,
    reducer: makePersistReducer({
      reducer,
      key: sliceKey,
      storage: 'storage',
      inputParams: { expireSeconds: null },
    }),
  })
}

export default useInjectNotes
