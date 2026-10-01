import { RootState } from 'store/types'
import { initialState } from './slice'
import { createSelector } from 'reselect'

export const selectSearchData = (state: RootState) =>
  state.search || initialState

export const getSearchCars = createSelector(
  [selectSearchData],
  search => search.data,
)

export const getSearchCarsCount = createSelector(
  [selectSearchData],
  search => search.count,
)

export const getSearchLoading = createSelector(
  [selectSearchData],
  search => search.ui.loading,
)

export const getSearchError = createSelector(
  [selectSearchData],
  search => search.errors,
)

export const getCarInSearchNavigation = (url?: string) =>
  createSelector([selectSearchData], search => {
    return url ? search.navigation?.[url] : null
  })

export const getPrevSearchUrl = createSelector(
  [selectSearchData],
  search => search.prevSearchUrl,
)
