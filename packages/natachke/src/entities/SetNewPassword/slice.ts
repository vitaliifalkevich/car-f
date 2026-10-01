import * as reducers from './reducers'
import { createSlice } from '@reduxjs/toolkit'
import { IState } from './types'

export const initialState: IState = {
  ui: {
    loading: false,
  },
  errors: null,
}

const slice = createSlice({
  name: 'setNewPassword',
  initialState,
  reducers,
})

export const { actions, reducer, name: sliceKey } = slice
