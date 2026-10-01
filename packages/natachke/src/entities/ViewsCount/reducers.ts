import { IState } from './types'

import { PayloadAction } from '@reduxjs/toolkit'
import {
  CarViewCountPayload,
  CarViewsHistory,
} from '@handber/natachke-api-client'
import { normalizeViewsHistory } from './normalization'

export const startIncreaseViewsCount = (
  state: IState,
  action: PayloadAction<{ data: CarViewCountPayload; recaptchaToken: string }>,
) => {
  state.ui.loading = true
}

export const finishIncreaseViewsCount = (state: IState) => {
  state.ui.loading = false
  state.errors = null
}

export const setErrorsViewsCount = (
  state: IState,
  action: PayloadAction<string | null>,
) => {
  state.errors = action.payload
  state.ui.loading = false
}

export const startGettingViewsHistory = (
  state: IState,
  action: PayloadAction<number>,
) => {
  state.history.ui.loading = true
  state.history.isEmptyHistory = true
}

export const finishGettingViewsHistory = (
  state: IState,
  action: PayloadAction<CarViewsHistory[]>,
) => {
  state.history.ui.loading = false
  if (action.payload.length > 0) state.history.isEmptyHistory = false
  state.history.data = normalizeViewsHistory(action.payload)
  state.history.errors = null
}

export const setErrorGettingViewsHistory = (
  state: IState,
  action: PayloadAction<string | null>,
) => {
  state.errors = action.payload
  state.history.isEmptyHistory = true
  state.ui.loading = false
}
