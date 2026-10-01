import { createSelector } from 'reselect'
import { RootState } from 'store/types'
import { initialState } from './slice'

export const selectLoginData = (state: RootState) => state.auth || initialState

export const getIsAuthSubmitting = createSelector(
  [selectLoginData],
  auth => auth.ui.loading,
)

export const getLoginErrors = createSelector(
  [selectLoginData],
  logIn => logIn.loginErrors,
)

export const getSignupErrors = createSelector(
  [selectLoginData],
  logIn => logIn.signupErrors,
)
