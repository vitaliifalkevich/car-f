import { takeLatest, all, fork, call, put } from 'redux-saga/effects'
import { actions } from './slice'
import { getCarApi, getServiceApi, needToRestartSaga } from 'api'
import { PayloadAction } from '@reduxjs/toolkit'
import { getCSRF } from '../Bootstrap/saga'
import { ISearchPayload } from './types'
import { env, SHOW_PER_PAGE_DEFAULT } from 'config'
import config from 'config'
const { currentCountryCode } = config

// ACTIONS
function* searchCars(
  action: PayloadAction<ISearchPayload>,
  tryNumber?: number,
) {
  try {
    const { currentPage, ...searchPayload } = action.payload
    const csrf = yield call(getCSRF)
    const carApi = getCarApi({ csrf })
    const serviceApi = getServiceApi({ csrf })
    const response = yield call(() => carApi.searchCars(searchPayload))

    if (env.topSearchServiceEnabled) {
      const topSearchCars = yield call(() =>
        serviceApi.getTopSearchCars({
          filters: {
            accidents: searchPayload?.filters?.accidents,
            sale_type:
              searchPayload?.filters?.sale_type !== 'all'
                ? searchPayload?.filters?.sale_type
                : undefined,
            brand: searchPayload?.filters?.brand,
            model: searchPayload?.filters?.model?.[0],
            body_type: searchPayload?.filters?.body_type,
            region: searchPayload?.filters?.region?.[0],
            engine_type: searchPayload?.filters?.engine_type?.[0],
            drive: searchPayload?.filters?.drive?.[0],
            transmission: searchPayload?.filters?.transmission?.[0],
          },
          currentPage: Number(currentPage),
          pagesCount: Math.ceil(
            SHOW_PER_PAGE_DEFAULT && response.data.count
              ? Number(response.data.count) / Number(SHOW_PER_PAGE_DEFAULT)
              : 0,
          ),
          country: currentCountryCode,
        }),
      )
      const topSearchCarsAsObject = topSearchCars.data.reduce((acc, item) => {
        return {
          ...acc,
          [item.id]: item,
        }
      }, {})

      const pureRegularCars = response.data.results.filter(
        car => !topSearchCarsAsObject[car.id],
      )

      yield put(
        actions.finishSearchCars({
          results: [...topSearchCars.data, ...pureRegularCars],
          count: response.data.count,
        }),
      )
    } else
      yield put(
        actions.finishSearchCars({
          results: response.data.results,
          count: response.data.count,
        }),
      )
  } catch (e) {
    const checkSagaRestart = needToRestartSaga(e, tryNumber)
    if (checkSagaRestart?.restart) {
      yield fork(searchCars, action, checkSagaRestart.counter)
    } else yield put(actions.setSearchCarsError(e?.response?.data?.message))
  }
}

// WATCHERS

function* watchSearchCars() {
  yield takeLatest(actions.startSearchCars.type, searchCars)
}

export default function* root() {
  yield all([fork(watchSearchCars)])
}
