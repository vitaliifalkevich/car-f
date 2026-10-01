import { PayloadAction } from '@reduxjs/toolkit'
import { IState } from './types'
import {
  CarInfoResponseCar,
  ComplainPayload,
} from '@handber/natachke-api-client'
import { normalizeCar } from './normalization'

export const startGettingCarInfo = (
  state: IState,
  action: PayloadAction<string>,
) => {
  state.ui.loading = true
}

export const finishGettingCarInfo = (
  state: IState,
  action: PayloadAction<CarInfoResponseCar>,
) => {
  state.data = normalizeCar(action.payload)
  state.ui.loading = false
}

export const setCarInfoErrors = (
  state: IState,
  action: PayloadAction<string | null>,
) => {
  state.errors = action.payload
  state.ui.loading = false
}

export const resetCarInfo = (state: IState) => {
  state.ui.loading = false
  state.data = null
  state.errors = null
}

export const setPriceUnderMarket = (
  state: IState,
  action: PayloadAction<boolean>,
) => {
  state.isPriceUnderMarket = action.payload
}

export const startComplain = (
  state: IState,
  action: PayloadAction<{ values: ComplainPayload; resolve: () => void }>,
) => {
  state.complain.ui.loading = true
}

export const finishComplain = (state: IState) => {
  state.complain.ui.loading = false
  state.complain.errors = null
}

export const setComplainError = (
  state: IState,
  action: PayloadAction<string>,
) => {
  state.complain.errors = action.payload
  state.complain.ui.loading = false
}
