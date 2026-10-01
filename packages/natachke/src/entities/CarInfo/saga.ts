import { takeLatest, all, fork, spawn, call, put } from 'redux-saga/effects'
import { actions } from './slice'
import { getCarApi, getComplainApi, needToRestartSaga } from 'api'
import { PayloadAction } from '@reduxjs/toolkit'
import { getCSRF } from '../Bootstrap/saga'
import {
  CarInfoResponseCar,
  ComplainPayload,
} from '@handber/natachke-api-client'
import config from 'config'
const { currentCountryCode } = config

// ACTIONS

function* setIsUnderMarket(car: CarInfoResponseCar, tryNumber?: number) {
  try {
    const csrf = yield call(getCSRF)
    const carAPi = getCarApi({ csrf })
    const response = yield call(() =>
      carAPi.getAveragePrice({
        brand: car?.brand?.value,
        model: car?.model?.value,
        year: car?.year,
        body_type: car?.body_type?.value,
        mileage: car?.mileage,
        engine_type: car?.engine_type?.value,
        transmission: car?.transmission?.value,
        drive: car?.drive?.value,
        country: currentCountryCode,
      }),
    )

    const calculateIfPriceUnderMarket = () => {
      if (!car?.price) return false
      return car?.price < response.data.price
    }

    yield put(actions.setPriceUnderMarket(calculateIfPriceUnderMarket()))
  } catch (e) {
    const checkSagaRestart = needToRestartSaga(e, tryNumber)
    if (checkSagaRestart?.restart) {
      yield fork(setIsUnderMarket, car, checkSagaRestart.counter)
    }
  }
}

function* getCarInfo(action: PayloadAction<string>, tryNumber?: number) {
  try {
    const csrf = yield call(getCSRF)
    const carAPi = getCarApi({ csrf })
    const response = yield call(() => carAPi.getCarInfo(action.payload))

    yield spawn(setIsUnderMarket, response?.data?.car)

    yield put(actions.finishGettingCarInfo(response.data?.car))
  } catch (e) {
    const checkSagaRestart = needToRestartSaga(e, tryNumber)
    if (checkSagaRestart?.restart) {
      yield fork(getCarInfo, action, checkSagaRestart.counter)
    } else yield put(actions.setCarInfoErrors(e?.response?.data?.message))
  }
}

function* complain(
  action: PayloadAction<{ values: ComplainPayload; resolve: () => void }>,
  tryNumber?: number,
) {
  try {
    const csrf = yield call(getCSRF)
    const carAPi = getComplainApi(csrf)
    yield call(() => carAPi.complain(action.payload.values))
    yield put(actions.finishComplain())
    action.payload.resolve()
  } catch (e) {
    const checkSagaRestart = needToRestartSaga(e, tryNumber)
    if (checkSagaRestart?.restart) {
      yield fork(complain, action, checkSagaRestart.counter)
    } else yield put(actions.setComplainError(e?.response?.data?.message))
  }
}

// WATCHERS

function* watchStartComplain() {
  yield takeLatest(actions.startComplain.type, complain)
}

function* watchGettingCarInfo() {
  yield takeLatest(actions.startGettingCarInfo.type, getCarInfo)
}

export default function* root() {
  yield all([fork(watchGettingCarInfo), fork(watchStartComplain)])
}
