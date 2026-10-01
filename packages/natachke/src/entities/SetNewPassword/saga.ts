import { takeLatest, all, fork, call, put } from 'redux-saga/effects'
import { actions } from './slice'
import { getUserApi } from 'api'
import { PayloadAction } from '@reduxjs/toolkit'
import { SetNewPasswordTokenPayload } from '@handber/natachke-api-client'

// ACTIONS

export function* setNewPassword(
  action: PayloadAction<{
    values: SetNewPasswordTokenPayload
    successAction: () => void
  }>,
) {
  try {
    const userApi = getUserApi()
    yield call(() =>
      userApi.setNewPasswordWithToken({
        codeConfirmation: action.payload.values.codeConfirmation,
        newPassword: action.payload.values.newPassword,
        repeatPassword: action.payload.values.repeatPassword,
      }),
    )

    yield put(actions.setNewPasswordErrors(null))
    action.payload.successAction()
  } catch (e) {
    yield put(actions.setNewPasswordErrors(e?.response?.data?.message))
  } finally {
    yield put(actions.setNewPasswordFinish())
  }
}

// WATCHERS
function* watchSetNewPassword() {
  yield takeLatest(actions.setNewPasswordStart.type, setNewPassword)
}

export default function* root() {
  yield all([fork(watchSetNewPassword)])
}
