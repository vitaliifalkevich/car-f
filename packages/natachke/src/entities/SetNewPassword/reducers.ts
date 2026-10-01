import { PayloadAction } from '@reduxjs/toolkit'
import { SetNewPasswordTokenPayload } from '@handber/natachke-api-client'
import { IState } from './types'

export const setNewPasswordStart = (
  state: IState,
  action: PayloadAction<{
    values: SetNewPasswordTokenPayload
    successAction: () => void
  }>,
) => {
  state.ui.loading = true
}

export const setNewPasswordFinish = (state: IState) => {
  state.ui.loading = false
}

export const setNewPasswordErrors = (
  state: IState,
  action: PayloadAction<string | null>,
) => {
  state.errors = action.payload
}
