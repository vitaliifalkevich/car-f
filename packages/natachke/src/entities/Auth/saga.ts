import { all, call, fork, put, spawn, takeLatest } from 'redux-saga/effects'
import { actions } from './slice'
import { actions as bootstrapActions } from '../Bootstrap/slice'
import { getUserApi, needToRestartSaga } from 'api'
import { PayloadAction } from '@reduxjs/toolkit'
import { LogInPayload } from './types'
import config from 'config'
import { deleteAuthToken, setAuthToken, STORAGE_TYPES } from 'utils'
import { getCSRF, loadProfile } from '../Bootstrap/saga'
import { RegisterUserPayloadUser } from '@handber/natachke-api-client'
import { gtagEvent, GtagEvents } from '../../analytics'

const { authToken } = config

// ACTIONS

export function* logOut(
  action?: PayloadAction<{ successAction?: () => void }>,
) {
  deleteAuthToken(authToken)
  yield put(bootstrapActions.setIsAuthorized(false))
  action?.payload?.successAction?.()
}
export function* logIn(
  action: PayloadAction<{
    values: LogInPayload
    successAction: () => void
    recaptchaToken?: string
  }>,
  tryNumber?: number,
) {
  const { email, password, remember } = action.payload.values

  try {
    const csrf = yield call(getCSRF)
    const userApi = getUserApi({
      csrf,
      recaptchaToken: action.payload.recaptchaToken,
    })
    const response = yield call(() =>
      userApi.logIn({ user: { email, password } }),
    )

    yield put(actions.logInFinish())
    yield put(actions.logInSetErrors(null))

    if (remember)
      setAuthToken(authToken, response.data.user.token, STORAGE_TYPES.LOCAL)
    else
      setAuthToken(authToken, response.data.user.token, STORAGE_TYPES.SESSION)
    yield call(loadProfile)
    action.payload.successAction()
    //send analytics event
    gtagEvent(GtagEvents.LOGIN)
  } catch (e) {
    const checkSagaRestart = needToRestartSaga(e, tryNumber)
    if (checkSagaRestart?.restart) {
      yield fork(logIn, action, checkSagaRestart.counter)
    }
    yield put(actions.logInFinish())
    yield put(actions.logInSetErrors(e?.response?.data?.message))

    gtagEvent(GtagEvents.LOGIN_ERROR, { error: e?.response?.data?.message })
  }
}

export function* signUp(
  action: PayloadAction<{
    values: RegisterUserPayloadUser
    successAction: () => void
    recaptchaToken?: string
  }>,
  tryNumber?: number,
) {
  try {
    const csrf = yield call(getCSRF)
    const userApi = getUserApi({
      csrf,
      recaptchaToken: action.payload.recaptchaToken,
    })

    const response = yield call(() =>
      userApi.registerUser({ user: action.payload.values }),
    )

    yield put(actions.signUpFinish())
    yield put(actions.signUpSetErrors(null))

    setAuthToken(authToken, response.user.token, STORAGE_TYPES.SESSION)
    yield call(loadProfile)
    action.payload.successAction()
    //send analytics event
    gtagEvent(GtagEvents.SIGNUP)

  } catch (e) {
    const checkSagaRestart = needToRestartSaga(e, tryNumber)
    if (checkSagaRestart?.restart) {
      yield fork(signUp, action, checkSagaRestart.counter)
    } else {
      yield put(actions.signUpFinish())
      yield put(actions.signUpSetErrors(e?.response?.data?.message))
      gtagEvent(GtagEvents.SIGNUP_ERROR, { error: e?.response?.data?.message })
    }
  }
}

// WATCHERS
function* watchLogIn() {
  yield takeLatest(actions.logInStart.type, logIn)
}

function* watchSignUp() {
  yield takeLatest(actions.signUpStart.type, signUp)
}

function* watchLogOut() {
  yield takeLatest(actions.logOut.type, logOut)
}

export default function* root() {
  yield all([fork(watchLogIn), fork(watchLogOut), fork(watchSignUp)])
}
