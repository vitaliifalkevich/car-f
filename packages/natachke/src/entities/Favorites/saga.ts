import { takeLatest, all, fork, call, put } from 'redux-saga/effects'
import { actions } from './slice'
import { getFavoritesApi, needToRestartSaga } from 'api'
import { getCSRF } from '../Bootstrap/saga'
import { PayloadAction } from '@reduxjs/toolkit'

// ACTIONS

function* getFavoriteCars() {
  try {
    const favoriteApi = getFavoritesApi()
    const response = yield call(() => favoriteApi.getFavoritesCars())

    yield put(actions.finishGettingMyCars(response.data))
  } catch (e) {
    yield put(actions.setFavoriteCarsErrors(e?.response?.data?.message))
  }
}

function* addFavoriteCar(action: PayloadAction<number>, tryNumber?: number) {
  try {
    const csrf = yield call(getCSRF)
    const favoriteApi = getFavoritesApi(csrf)
    yield call(() =>
      favoriteApi.addCarsToFavorites({ carIds: [action.payload] }),
    )

    yield put(actions.finishAddingFavoriteCar())
    yield put(actions.startGettingFavoriteCars())
  } catch (e) {
    const checkSagaRestart = needToRestartSaga(e, tryNumber)
    if (checkSagaRestart?.restart) {
      yield fork(addFavoriteCar, action, checkSagaRestart.counter)
    } else yield put(actions.serErrorAddFavoriteCar(e?.response?.data?.message))
  }
}

function* deleteFavoriteCar(action: PayloadAction<number>, tryNumber?: number) {
  try {
    const csrf = yield call(getCSRF)
    const favoriteApi = getFavoritesApi(csrf)
    yield call(() =>
      favoriteApi.deleteCarsFromFavorites({ carIds: [action.payload] }),
    )

    yield put(actions.deleteFavoriteCarSuccess())
    yield put(actions.startGettingFavoriteCars())
  } catch (e) {
    const checkSagaRestart = needToRestartSaga(e, tryNumber)
    if (checkSagaRestart?.restart) {
      yield fork(deleteFavoriteCar, action, checkSagaRestart.counter)
    } else yield put(actions.deleteFavoriteCarError(e?.response?.data?.message))
  }
}

// WATCHERS

function* watchGettingFavoriteCars() {
  yield takeLatest(actions.startGettingFavoriteCars.type, getFavoriteCars)
}

function* watchAddingFavoriteCar() {
  yield takeLatest(actions.startAddingFavoriteCar.type, addFavoriteCar)
}

function* watchDeletingFavoriteCar() {
  yield takeLatest(actions.startDeletingFavoriteCar.type, deleteFavoriteCar)
}

export default function* root() {
  yield all([
    fork(watchGettingFavoriteCars),
    fork(watchAddingFavoriteCar),
    fork(watchDeletingFavoriteCar),
  ])
}
