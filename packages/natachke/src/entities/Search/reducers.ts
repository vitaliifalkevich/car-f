import { PayloadAction } from '@reduxjs/toolkit'
import { ISearchPayload, IState } from './types'
import { SearchCarsFullResponse } from '@handber/natachke-api-client'
import { normalizeSearchCars, prepareCarNavigation } from '../normalization'

export const startSearchCars = (
  state: IState,
  action: PayloadAction<ISearchPayload>,
) => {
  state.ui.loading = true
}

export const finishSearchCars = (
  state: IState,
  action: PayloadAction<SearchCarsFullResponse>,
) => {
  if (action.payload?.results) {
    const normalizedCars = normalizeSearchCars(action.payload?.results)
    state.data = normalizedCars
    state.navigation = prepareCarNavigation(normalizedCars)
  }

  state.count = action?.payload?.count
  state.ui.loading = false
  state.errors = null
}

export const setSearchCarsError = (
  state: IState,
  action: PayloadAction<string>,
) => {
  state.data = []
  state.navigation = {}
  state.ui.loading = false
  state.errors = action.payload
}

export const setPrevSearchParams = (
  state: IState,
  action: PayloadAction<string | null>,
) => {
  state.prevSearchUrl = action.payload
}
