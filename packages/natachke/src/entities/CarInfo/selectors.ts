import { RootState } from 'store/types'
import { initialState } from './slice'
import { createSelector } from 'reselect'

export const selectCarData = (state: RootState) => state.carInfo || initialState

export const getCarInfoData = createSelector(
  [selectCarData],
  carInfo => carInfo.data,
)

export const getCarInfoErrors = createSelector(
  [selectCarData],
  carInfo => carInfo.errors,
)

export const getCarInfoLoading = createSelector(
  [selectCarData],
  carInfo => carInfo.ui.loading,
)

export const getCarIsUnderMarket = createSelector(
  [selectCarData],
  carInfo => carInfo.isPriceUnderMarket,
)

export const getIsComplaining = createSelector(
  [selectCarData],
  carInfo => carInfo.complain.ui.loading,
)

export const getIsComplainError = createSelector(
  [selectCarData],
  carInfo => carInfo.complain.errors,
)
