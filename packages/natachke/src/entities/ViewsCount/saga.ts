import { all, call, fork, put, takeLatest } from 'redux-saga/effects'
import { getCarApi, getViewsApi, needToRestartSaga } from 'api'
import { actions } from './slice'
import { PayloadAction } from '@reduxjs/toolkit'
import { getCSRF } from '../Bootstrap/saga'
import { CarViewCountPayload } from '@handber/natachke-api-client'

// ACTIONS

function* increaseViewsCount(
  action: PayloadAction<{ data: CarViewCountPayload; recaptchaToken: string }>,
  tryNumber?: number,
) {
  try {
    const csrf = yield call(getCSRF)
    const carApi = getCarApi({
      csrf,
      recaptchaToken: action.payload.recaptchaToken,
    })
    yield call(() => carApi.addViewCount(action.payload.data))
    yield put(actions.finishIncreaseViewsCount())
  } catch (e) {
    const checkSagaRestart = needToRestartSaga(e, tryNumber)
    if (checkSagaRestart?.restart) {
      yield fork(increaseViewsCount, action, checkSagaRestart.counter)
    } else yield put(actions.setErrorsViewsCount(e?.response?.data?.message))
  }
}

function* getViewsHistory(action: PayloadAction<number>, tryNumber?: number) {
  try {
    const csrf = yield call(getCSRF)
    const carApi = getViewsApi(csrf)
    const response = yield call(() => carApi.getCarViewsHistory(action.payload))
    yield put(actions.finishGettingViewsHistory(response.data))
  } catch (e) {
    const checkSagaRestart = needToRestartSaga(e, tryNumber)
    if (checkSagaRestart?.restart) {
      yield fork(getViewsHistory, action, checkSagaRestart.counter)
    } else
      yield put(actions.setErrorGettingViewsHistory(e?.response?.data?.message))
  }
}

// WATCHERS

function* watchIncreaseViewsCount() {
  yield takeLatest(actions.startIncreaseViewsCount.type, increaseViewsCount)
}

function* watchGettingViewsHistory() {
  yield takeLatest(actions.startGettingViewsHistory.type, getViewsHistory)
}

export default function* root() {
  yield all([fork(watchIncreaseViewsCount), fork(watchGettingViewsHistory)])
}
