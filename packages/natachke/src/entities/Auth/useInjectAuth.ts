import { useInjectReducer, useInjectSaga } from 'redux-injectors'
import { reducer, sliceKey } from './slice'
import saga from './saga'

const useInjectAuth = () => {
  useInjectReducer({ key: sliceKey, reducer })
  useInjectSaga({ key: sliceKey, saga })
}

export default useInjectAuth
