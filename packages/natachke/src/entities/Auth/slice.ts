import reducers from './reducers'
import { createSlice } from '@reduxjs/toolkit'
import { IState } from './types'

export const initialState: IState = {
  ui: {
    loading: false,
  },
  signupErrors: null,
  loginErrors: null,
}

const slice = createSlice({
  name: 'auth',
  initialState,
  reducers,
})

export const { actions, reducer, name: sliceKey } = slice
