import { PayloadAction } from '@reduxjs/toolkit'
import { IState } from './types'
import {
  GetCarsInTopCatalogResponse,
  SearchCarItem,
} from '@handber/natachke-api-client'
import { normalizeSearchCars } from '../normalization'

export const startGettingLatestCars = (state: IState) => {
  state.latestCars.ui.loading = true
}

export const finishGettingLatestCars = (
  state: IState,
  action: PayloadAction<SearchCarItem[]>,
) => {
  state.latestCars.data = normalizeSearchCars(action.payload)
  state.latestCars.ui.loading = false
  state.latestCars.errors = null
}

export const setGettingLatestCarsError = (
  state: IState,
  action: PayloadAction<string>,
) => {
  state.latestCars.ui.loading = false
  state.latestCars.errors = action.payload
}

export const startGettingMostViewedCars = (state: IState) => {
  state.mostViewedCars.ui.loading = true
}

export const finishGettingMostViewedCars = (
  state: IState,
  action: PayloadAction<SearchCarItem[]>,
) => {
  state.mostViewedCars.data = normalizeSearchCars(action.payload)
  state.mostViewedCars.ui.loading = false
  state.mostViewedCars.errors = null
}

export const setGettingMostViewedError = (
  state: IState,
  action: PayloadAction<string>,
) => {
  state.mostViewedCars.ui.loading = false
  state.mostViewedCars.errors = action.payload
}

export const startGettingTrueCars = (state: IState) => {
  state.trueCars.ui.loading = true
}

export const finishGettingTrueCars = (
  state: IState,
  action: PayloadAction<SearchCarItem[]>,
) => {
  state.trueCars.data = normalizeSearchCars(action.payload)
  state.trueCars.ui.loading = false
  state.trueCars.errors = null
}

export const setGettingTrueCarsError = (
  state: IState,
  action: PayloadAction<string>,
) => {
  state.trueCars.ui.loading = false
  state.trueCars.errors = action.payload
}

export const startGettingHomeTopCars = (state: IState) => {
  state.topCars.ui.loading = true
}

export const finishGettingHomeTopCars = (
  state: IState,
  action: PayloadAction<GetCarsInTopCatalogResponse>,
) => {
  state.topCars.data = normalizeSearchCars(action.payload?.results)
  state.topCars.ui.loading = false
  state.topCars.errors = null
}

export const setGettingTopCarsError = (
  state: IState,
  action: PayloadAction<string | null>,
) => {
  state.topCars.errors = action.payload
  state.topCars.ui.loading = false
}
