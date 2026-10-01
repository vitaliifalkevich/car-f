import { createSelector } from 'reselect'
import { RootState } from 'store/types'
import { initialState } from './slice'

export const selectViewsData = (state: RootState) =>
  state.viewsCount || initialState

export const getIsViewsHistoryLoading = createSelector(
  [selectViewsData],
  data => data.history.ui.loading,
)

export const getViewsHistoryErrors = createSelector(
  [selectViewsData],
  data => data.history.errors,
)

export const getViewsHistoryData = createSelector(
  [selectViewsData],
  data => data.history.data,
)

export const getIsEmptyViewsHistory = createSelector(
  [selectViewsData],
  data => data.history.isEmptyHistory,
)
