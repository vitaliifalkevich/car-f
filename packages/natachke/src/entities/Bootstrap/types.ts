import { LoginUserResponseUser } from '@handber/natachke-api-client'

export interface IState {
  isAuthorized: null | boolean
  userProfile: LoginUserResponseUser | null
  currentLanguage: string
  checkEmail: {
    errors: string | null
  }
  ui: {
    loading: boolean
    error: string | null
  }
}
