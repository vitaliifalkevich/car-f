import * as reducers from './reducers'
import { createSlice } from '@reduxjs/toolkit'
import { IState } from './types'

export const initialState: IState = {
  isAuthorized: null,
  currentLanguage: 'en',
  userProfile: null,
  checkEmail: {
    errors: null,
  },
  ui: {
    loading: false,
    error: null,
  },
}

const slice = createSlice({
  name: 'setupData',
  initialState,
  reducers,
})

export const { actions, reducer, name: sliceKey } = slice
