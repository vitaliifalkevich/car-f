import { takeLatest, all, fork, call, put } from 'redux-saga/effects'
import { actions } from './slice'
import { getCarApi, getCarStatusApi, needToRestartSaga } from 'api'
import { getCSRF } from '../Bootstrap/saga'
import { PayloadAction } from '@reduxjs/toolkit'
import { IChangeCarStatusPayload } from './types'

// ACTIONS

function* getMyCars(tryNumber?: number) {
  try {
    const csrf = yield call(getCSRF)
    const carAPi = getCarApi({ csrf })
    const response = yield call(() => carAPi.getMyCars())

    yield put(actions.finishGettingMyCars(response.data))
  } catch (e) {
    const checkSagaRestart = needToRestartSaga(e, tryNumber)
    if (checkSagaRestart?.restart) {
      yield fork(getMyCars, checkSagaRestart.counter)
    } else yield put(actions.setMyCarsErrors(e?.response?.data?.message))
  }
}

function* changeCarVisibleStatus(
  action: PayloadAction<IChangeCarStatusPayload>,
  tryNumber?: number,
) {
  try {
    const csrf = yield call(getCSRF)
    const statusApi = getCarStatusApi(csrf)
    yield call(() => statusApi.changeCarVisibleStatus(action.payload))

    yield put(actions.changeCarVisibleStatus())
    yield put(actions.startGettingMyCars())
  } catch (e) {
    const checkSagaRestart = needToRestartSaga(e, tryNumber)
    if (checkSagaRestart?.restart) {
      yield fork(changeCarVisibleStatus, action, checkSagaRestart.counter)
    } else
      yield put(actions.changeCarVisibleStatusError(e?.response?.data?.message))
  }
}

function* deleteCar(action: PayloadAction<number>, tryNumber?: number) {
  try {
    const csrf = yield call(getCSRF)
    const carAPi = getCarApi({ csrf })
    yield call(() => carAPi.deleteCar({ carId: action.payload }))

    yield put(actions.deleteCarSuccess())
    yield put(actions.startGettingMyCars())
  } catch (e) {
    const checkSagaRestart = needToRestartSaga(e, tryNumber)
    if (checkSagaRestart?.restart) {
      yield fork(deleteCar, action, checkSagaRestart.counter)
    } else yield put(actions.deleteCarError(e?.response?.data?.message))
  }
}

// WATCHERS

function* watchGettingMyCars() {
  yield takeLatest(actions.startGettingMyCars.type, getMyCars)
}

function* watchChangingCarVisibleStatus() {
  yield takeLatest(
    actions.startChangeCarVisibleStatus.type,
    changeCarVisibleStatus,
  )
}

function* watchDeletingCar() {
  yield takeLatest(actions.startDeletingCar.type, deleteCar)
}

export default function* root() {
  yield all([
    fork(watchGettingMyCars),
    fork(watchChangingCarVisibleStatus),
    fork(watchDeletingCar),
  ])
}
