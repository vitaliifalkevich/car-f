import { PayloadAction } from '@reduxjs/toolkit'
import { ResetPasswordPayload } from '@handber/natachke-api-client'
import { IState } from './types'

export const resetPasswordStart = (
  state: IState,
  action: PayloadAction<{
    values: ResetPasswordPayload
    successAction: () => void
  }>,
) => {
  state.ui.loading = true
}

export const resetPasswordFinish = (state: IState) => {
  state.ui.loading = false
}

export const resetPasswordErrors = (
  state: IState,
  action: PayloadAction<string | null>,
) => {
  state.errors = action.payload
}
