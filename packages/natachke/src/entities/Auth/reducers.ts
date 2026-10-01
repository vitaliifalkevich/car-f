import { PayloadAction } from '@reduxjs/toolkit'
import { RegisterUserPayloadUser } from '@handber/natachke-api-client'
import { IState, LogInPayload } from './types'

const logInStart = (
  state: IState,
  action: PayloadAction<{
    values: LogInPayload
    successAction: () => void
    recaptchaToken?: string
  }>,
) => {
  state.ui.loading = true
}

const logInFinish = (state: IState) => {
  state.ui.loading = false
}

const logInSetErrors = (
  state: IState,
  action: PayloadAction<string | null>,
) => {
  state.loginErrors = action.payload
}

const signUpStart = (
  state: IState,
  action: PayloadAction<{
    values: RegisterUserPayloadUser
    successAction: () => void
    recaptchaToken?: string
  }>,
) => {
  state.ui.loading = true
}

const signUpFinish = (state: IState) => {
  state.ui.loading = false
}

const signUpSetErrors = (
  state: IState,
  action: PayloadAction<string | null>,
) => {
  state.signupErrors = action.payload
}

const logOut = (
  state: IState,
  action?: PayloadAction<{ successAction?: () => void }>,
) => {
  return state
}

export default {
  logInStart,
  logInFinish,
  logInSetErrors,
  signUpStart,
  signUpFinish,
  signUpSetErrors,
  logOut,
}
