export interface IState {
  ui: {
    loading: boolean
  }
  loginErrors: string | null
  signupErrors: string | null
}

export interface LogInPayload {
  email: string
  password: string
  remember: boolean
}
