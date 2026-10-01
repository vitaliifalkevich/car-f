import { PayloadAction } from '@reduxjs/toolkit'
import { IState } from './types'
import { FavoriteCar } from '@handber/natachke-api-client'
import { normalizeFavoriteCars } from './normalization'

export const startGettingFavoriteCars = (state: IState) => {
  state.ui.loading = true
}

export const finishGettingMyCars = (
  state: IState,
  action: PayloadAction<FavoriteCar[]>,
) => {
  state.data = normalizeFavoriteCars(action.payload)
  state.ui.loading = false
  state.errors = null
}

export const setFavoriteCarsErrors = (
  state: IState,
  action: PayloadAction<string | null>,
) => {
  state.errors = action.payload
  state.ui.loading = false
}

export const startAddingFavoriteCar = (
  state: IState,
  action: PayloadAction<number>,
) => {
  state.add.ui.loading = true
}

export const finishAddingFavoriteCar = (state: IState) => {
  state.add.ui.loading = false
  state.add.errors = null
}

export const serErrorAddFavoriteCar = (
  state: IState,
  action: PayloadAction<string>,
) => {
  state.add.ui.loading = false
  state.add.errors = action.payload
}

export const startDeletingFavoriteCar = (
  state: IState,
  action: PayloadAction<number>,
) => {
  state.delete.ui.loading = true
}

export const deleteFavoriteCarSuccess = (state: IState) => {
  state.delete.ui.loading = false
  state.delete.errors = null
}

export const deleteFavoriteCarError = (
  state: IState,
  action: PayloadAction<string>,
) => {
  state.delete.ui.loading = false
  state.delete.errors = action.payload
}
