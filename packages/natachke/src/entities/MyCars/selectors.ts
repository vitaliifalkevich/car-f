import { RootState } from 'store/types'
import { initialState } from './slice'
import { createSelector } from 'reselect'

export const selectMyCarsData = (state: RootState) =>
  state.myCars || initialState

export const getMyCars = createSelector(
  [selectMyCarsData],
  myCars => myCars.data,
)

export const getMyCarsError = createSelector(
  [selectMyCarsData],
  myCars => myCars.errors,
)

export const getMyCarsLoading = createSelector(
  [selectMyCarsData],
  myCars => myCars.ui.loading,
)

export const changeCarVisibleStatusLoading = createSelector(
  [selectMyCarsData],
  myCars => myCars.changeVisibleStatus.ui.loading,
)

export const changeCarVisibleStatusError = createSelector(
  [selectMyCarsData],
  myCars => myCars.changeVisibleStatus.ui.loading,
)

export const deleteCarLoading = createSelector(
  [selectMyCarsData],
  myCars => myCars.deleteCar.ui.loading,
)

export const deleteCarError = createSelector(
  [selectMyCarsData],
  myCars => myCars.deleteCar.ui.loading,
)
