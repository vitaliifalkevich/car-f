import { takeLatest, all, fork, call, put } from 'redux-saga/effects'
import { actions } from './slice'
import { getCarApi, getServiceApi } from 'api'
import { getCSRF } from '../Bootstrap/saga'
import config, { env, SHOW_PER_PAGE_DEFAULT } from 'config'
const { currentCountryCode } = config

// ACTIONS

function* getLatestCars() {
  try {
    const carApi = getCarApi()
    const response = yield call(() =>
      carApi.getLatestCars(SHOW_PER_PAGE_DEFAULT, currentCountryCode),
    )

    yield put(actions.finishGettingLatestCars(response.data))
  } catch (e) {
    yield put(actions.setGettingLatestCarsError(e?.response?.data?.message))
  }
}

function* getMostViewedCars() {
  try {
    const carApi = getCarApi()
    const response = yield call(() =>
      carApi.getMostViewedCars(SHOW_PER_PAGE_DEFAULT, currentCountryCode),
    )

    yield put(actions.finishGettingMostViewedCars(response.data))
  } catch (e) {
    yield put(actions.setGettingMostViewedError(e?.response?.data?.message))
  }
}

function* getTrueCars() {
  try {
    const carApi = getCarApi()
    const response = yield call(() =>
      carApi.getTrueCars(SHOW_PER_PAGE_DEFAULT, currentCountryCode),
    )

    yield put(actions.finishGettingTrueCars(response.data))
  } catch (e) {
    yield put(actions.setGettingTrueCarsError(e?.response?.data?.message))
  }
}

function* getHomeTopCars() {
  try {
    if (env.topCatalogServiceEnabled) {
      const csrf = yield call(getCSRF)
      const serviceApi = getServiceApi({ csrf })

      const response = yield call(() =>
        serviceApi.getTopCatalogCars({
          paginate: {
            start: 0,
            count: 25,
          },
          country: currentCountryCode,
        }),
      )

      yield put(actions.finishGettingHomeTopCars(response.data))
    } else
      yield put(actions.finishGettingHomeTopCars({ results: [], count: 0 }))
  } catch (e) {
    yield put(actions.setGettingTopCarsError(e?.response?.data?.message))
  }
}

// WATCHERS

function* watchGettingLatestCars() {
  yield takeLatest(actions.startGettingLatestCars.type, getLatestCars)
}

function* watchGettingMostViewedCars() {
  yield takeLatest(actions.startGettingMostViewedCars.type, getMostViewedCars)
}

function* watchGettingTrueCars() {
  yield takeLatest(actions.startGettingTrueCars.type, getTrueCars)
}

function* watchGettingTopCarsForHome() {
  yield takeLatest(actions.startGettingHomeTopCars.type, getHomeTopCars)
}

export default function* root() {
  yield all([
    fork(watchGettingLatestCars),
    fork(watchGettingMostViewedCars),
    fork(watchGettingTrueCars),
    fork(watchGettingTopCarsForHome),
  ])
}
