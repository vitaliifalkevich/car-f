import { createSelector } from 'reselect'
import { RootState } from 'store/types'
import { initialState } from './slice'
import { languages } from 'config'
export const selectSetupData = (state: RootState) =>
  state.setupData || initialState

export const getIsAuthorized = createSelector(
  [selectSetupData],
  setupData => setupData.isAuthorized,
)

export const getLanguage = createSelector(
  [selectSetupData],
  setupData => setupData.currentLanguage,
)

export const getLanguagesByIdConfig = () => languages

export const getUserProfile = createSelector(
  [selectSetupData],
  setupData => setupData.userProfile,
)

export const getErrorsCheckingEmail = createSelector(
  [selectSetupData],
  setupData => setupData.checkEmail.errors,
)
