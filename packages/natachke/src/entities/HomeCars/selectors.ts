import { RootState } from 'store/types'
import { initialState } from './slice'
import { createSelector } from 'reselect'

export const selectHomeCarsData = (state: RootState) =>
  state.homeCars || initialState

export const getLatestCars = createSelector(
  [selectHomeCarsData],
  data => data.latestCars.data,
)

export const getLatestCarsLoading = createSelector(
  [selectHomeCarsData],
  data => data.latestCars.ui.loading,
)

export const getLatestCarsError = createSelector(
  [selectHomeCarsData],
  data => data.latestCars.errors,
)

export const getMostViewedCars = createSelector(
  [selectHomeCarsData],
  data => data.mostViewedCars.data,
)

export const getMostViewedCarsLoading = createSelector(
  [selectHomeCarsData],
  data => data.mostViewedCars.ui.loading,
)

export const getMostViewedCarsError = createSelector(
  [selectHomeCarsData],
  data => data.mostViewedCars.errors,
)

export const getTrueCars = createSelector(
  [selectHomeCarsData],
  data => data.trueCars.data,
)

export const getTrueCarsLoading = createSelector(
  [selectHomeCarsData],
  data => data.trueCars.ui.loading,
)

export const getTrueError = createSelector(
  [selectHomeCarsData],
  data => data.trueCars.errors,
)

export const getHomeTopCarsData = createSelector(
  [selectHomeCarsData],
  data => data.topCars.data,
)

export const getIsHomeTopCarsLoading = createSelector(
  [selectHomeCarsData],
  data => data.topCars.ui.loading,
)

export const getHomeTopCarsError = createSelector(
  [selectHomeCarsData],
  data => data.topCars.errors,
)
