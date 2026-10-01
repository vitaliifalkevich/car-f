import { createSelector } from 'reselect'
import { RootState } from 'store/types'
import { initialState } from './slice'

export const selectLoginData = (state: RootState) =>
  state.setNewPassword || initialState

export const getSetNewPasswordSubmitting = createSelector(
  [selectLoginData],
  resetPassword => resetPassword.ui.loading,
)

export const getSetNewPasswordErrors = createSelector(
  [selectLoginData],
  resetPassword => resetPassword.errors,
)
