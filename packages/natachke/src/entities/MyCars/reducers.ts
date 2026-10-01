import { PayloadAction } from '@reduxjs/toolkit'
import { IChangeCarStatusPayload, IState } from './types'
import { normalizeMyCars } from './normalization'
import { MyCar } from '@handber/natachke-api-client'

export const startGettingMyCars = (state: IState) => {
  state.ui.loading = true
}

export const finishGettingMyCars = (
  state: IState,
  action: PayloadAction<MyCar[]>,
) => {
  state.data = normalizeMyCars(action.payload)
  state.ui.loading = false
}

export const setMyCarsErrors = (
  state: IState,
  action: PayloadAction<string | null>,
) => {
  state.errors = action.payload
  state.ui.loading = false
}

export const startChangeCarVisibleStatus = (
  state: IState,
  action: PayloadAction<IChangeCarStatusPayload>,
) => {
  state.changeVisibleStatus.ui.loading = true
}

export const changeCarVisibleStatus = (state: IState) => {
  state.changeVisibleStatus.ui.loading = false
  state.changeVisibleStatus.errors = null
}

export const changeCarVisibleStatusError = (
  state: IState,
  action: PayloadAction<string>,
) => {
  state.changeVisibleStatus.ui.loading = false
  state.changeVisibleStatus.errors = action.payload
}

export const startDeletingCar = (
  state: IState,
  action: PayloadAction<number>,
) => {
  state.deleteCar.ui.loading = true
}

export const deleteCarSuccess = (state: IState) => {
  state.deleteCar.ui.loading = false
  state.deleteCar.errors = null
}

export const deleteCarError = (
  state: IState,
  action: PayloadAction<string>,
) => {
  state.deleteCar.ui.loading = false
  state.deleteCar.errors = action.payload
}
