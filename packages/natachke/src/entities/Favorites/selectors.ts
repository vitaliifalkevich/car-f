import { RootState } from 'store/types'
import { initialState } from './slice'
import { createSelector } from 'reselect'

export const selectFavoritesCarsData = (state: RootState) =>
  state.favoriteCars || initialState

export const getMyFavoriteCars = createSelector(
  [selectFavoritesCarsData],
  favorites => favorites.data,
)

export const getMyFavoriteCarsError = createSelector(
  [selectFavoritesCarsData],
  favorites => favorites.errors,
)

export const getFavoriteCarsLoading = createSelector(
  [selectFavoritesCarsData],
  favorites => favorites.ui.loading,
)

export const deleteFavoriteCarLoading = createSelector(
  [selectFavoritesCarsData],
  favorites => favorites.delete.ui.loading,
)

export const addFavoriteCarLoading = createSelector(
  [selectFavoritesCarsData],
  favorites => favorites.add.ui.loading,
)

export const isCarFavorite = carId =>
  createSelector(
    [selectFavoritesCarsData],
    favorites => favorites?.data?.find(item => item.id === carId) || false,
  )
