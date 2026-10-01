import { useInjectReducer, useInjectSaga } from 'redux-injectors'
import { reducer, sliceKey } from './slice'
import saga from './saga'

const useInjectMyCars = () => {
  useInjectReducer({ key: sliceKey, reducer })
  useInjectSaga({ key: sliceKey, saga })
}

export default useInjectMyCars
