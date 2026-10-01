import hardSet from 'redux-persist/lib/stateReconciler/hardSet'
import autoMergeLevel1 from 'redux-persist/lib/stateReconciler/autoMergeLevel1'
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2'
import { IStateRewritePolicy } from './types'

const stateRewritePolicy = {
  hardSet,
  autoMergeLevel1,
  autoMergeLevel2,
}

export const getStateRewritePolicy = (policyName: IStateRewritePolicy) => {
  return stateRewritePolicy[policyName]
}
