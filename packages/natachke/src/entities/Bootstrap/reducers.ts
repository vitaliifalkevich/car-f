import { IState } from './types'
import { PayloadAction } from '@reduxjs/toolkit'
import { RegisterUserResponseUser } from '@handber/natachke-api-client'

export const bootstrap = (state: IState) => {
  state.ui.loading = true
}

export const bootstrapSuccess = (
  state: IState,
  action: PayloadAction<RegisterUserResponseUser>,
) => {
  state.userProfile = action.payload
  state.ui.loading = false
}

export const bootstrapError = (
  state: IState,
  action: PayloadAction<string>,
) => {
  state.ui.loading = false
  state.ui.error = action.payload
}

export const setIsAuthorized = (
  state: IState,
  action: PayloadAction<boolean>,
) => {
  state.isAuthorized = action.payload
}

export const setCurrentLanguage = (
  state: IState,
  action: PayloadAction<string>,
) => {
  state.currentLanguage = action.payload
}

export const changeAuthUserLanguage = (
  state: IState,
  action: PayloadAction<string>,
) => {
  return state
}

export const startCheckingEmail = (
  state: IState,
  action: PayloadAction<string>,
) => {
  return state
}

export const startLoadProfile = (state: IState) => {
  return state
}

export const setEmailCheckingErrors = (
  state: IState,
  action: PayloadAction<string | null>,
) => {
  state.checkEmail.errors = action.payload
}
