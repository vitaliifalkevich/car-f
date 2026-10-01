import { useInjectReducer, useInjectSaga } from 'redux-injectors'
import { reducer, sliceKey } from './slice'
import saga from './saga'

const useInjectResetPassword = () => {
  useInjectReducer({ key: sliceKey, reducer })
  useInjectSaga({ key: sliceKey, saga })
}

export default useInjectResetPassword
