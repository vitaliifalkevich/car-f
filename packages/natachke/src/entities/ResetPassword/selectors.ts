import { createSelector } from 'reselect'
import { RootState } from 'store/types'
import { initialState } from './slice'

export const selectLoginData = (state: RootState) =>
  state.resetPassword || initialState

export const getIsSubmitting = createSelector(
  [selectLoginData],
  resetPassword => resetPassword.ui.loading,
)

export const getResetPasswordErrors = createSelector(
  [selectLoginData],
  resetPassword => resetPassword.errors,
)
