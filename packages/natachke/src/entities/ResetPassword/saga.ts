import { takeLatest, all, fork, call, put } from 'redux-saga/effects'
import { ResetPasswordPayload } from '@handber/natachke-api-client'
import { actions } from './slice'
import { getUserApi, needToRestartSaga } from 'api'
import { PayloadAction } from '@reduxjs/toolkit'
import { getCSRF } from '../Bootstrap/saga'

// ACTIONS

export function* resetPassword(
  action: PayloadAction<{
    values: ResetPasswordPayload
    successAction: () => void
  }>,
  tryNumber?: number,
) {
  try {
    const csrf = yield call(getCSRF)
    const userAPi = getUserApi({ csrf })
    yield call(() =>
      userAPi.resetPassword({ email: action.payload.values.email }),
    )

    yield put(actions.resetPasswordErrors(null))
    yield put(actions.resetPasswordFinish())
    action.payload.successAction()
  } catch (e) {
    const checkSagaRestart = needToRestartSaga(e, tryNumber)
    if (checkSagaRestart?.restart) {
      yield fork(resetPassword, action, checkSagaRestart.counter)
    } else {
      yield put(actions.resetPasswordErrors(e?.response?.data?.message))
      yield put(actions.resetPasswordFinish())
    }
  }
}

// WATCHERS
function* watchResetPassword() {
  yield takeLatest(actions.resetPasswordStart.type, resetPassword)
}

export default function* root() {
  yield all([fork(watchResetPassword)])
}
