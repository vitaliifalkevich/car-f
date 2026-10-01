import { takeLatest, all, fork, put, call, spawn } from 'redux-saga/effects'
import { actions } from './slice'
import { getUserApi, getInitialApi, needToRestartSaga } from 'api'
import config, { env } from 'config'
import { getAuthToken } from '../../utils'
import { getInitialOptions } from '../Car/saga'
import { PayloadAction } from '@reduxjs/toolkit'
const { authToken } = config

// ACTIONS

export function* getCSRF() {
  try {
    const initApi = getInitialApi()
    const response = yield call(() => initApi.generateCsrfToken())
    return response.data.csrfToken
  } catch (e) {
    yield put(actions.bootstrap())
  }
}

function* loadSetupInfo() {
  try {
    yield call(loadProfile)
    yield call(getInitialOptions)
  } catch (e) {
    yield put(actions.bootstrapError(e.message))
  }
}

export function* loadProfile() {
  const authTokenInTheStorage = getAuthToken(authToken)
  if (!authTokenInTheStorage) {
    return yield put(actions.setIsAuthorized(false))
  }
  try {
    const userApi = getUserApi()
    const response = yield call(() => userApi.getUser())
    yield put(actions.setIsAuthorized(Boolean(response.data.user.id)))
    yield put(actions.bootstrapSuccess(response.data.user))

  } catch (e) {
    yield put(actions.setIsAuthorized(false))
    yield put(actions.bootstrapError(e.message))
  }
}

export function* changeUserLanguage(action: PayloadAction<string>) {
  const authTokenInTheStorage = getAuthToken(authToken)
  if (!authTokenInTheStorage) return

  try {
    const csrf = yield call(getCSRF)
    const userApi = getUserApi({ csrf })
    yield call(() =>
      userApi.updateUser({
        user: {
          locale: action.payload,
        },
      }),
    )
    yield call(loadProfile)
  } catch (err) {}
}

export function* checkEmail(action: PayloadAction<string>, tryNumber?: number) {
  try {
    const csrf = yield call(getCSRF)
    const userApi = getUserApi({ csrf })
    yield userApi.checkEmail({ email: action.payload })
    yield put(actions.setEmailCheckingErrors(null))
  } catch (e) {
    const checkSagaRestart = needToRestartSaga(e, tryNumber)
    if (checkSagaRestart?.restart) {
      yield fork(checkEmail, action, checkSagaRestart.counter)
    } else yield put(actions.setEmailCheckingErrors(e?.response?.data?.message))
  }
}

// WATCHERS

function* watchLoadSetupInfo() {
  yield takeLatest(actions.bootstrap.type, loadSetupInfo)
}

function* watchCheckingEmail() {
  yield takeLatest(actions.startCheckingEmail.type, checkEmail)
}

function* watchLoadProfile() {
  yield takeLatest(actions.startLoadProfile.type, loadProfile)
}

function* watchChangeUserLanguage() {
  yield takeLatest(actions.changeAuthUserLanguage.type, changeUserLanguage)
}

export default function* root() {
  yield all([
    fork(watchLoadSetupInfo),
    fork(watchCheckingEmail),
    fork(watchLoadProfile),
    fork(watchChangeUserLanguage),
  ])
}
