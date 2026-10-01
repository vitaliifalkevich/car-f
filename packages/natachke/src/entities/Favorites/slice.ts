import * as reducers from './reducers'
import { createSlice } from '@reduxjs/toolkit'
import { IState } from './types'

export const initialState: IState = {
  data: [],
  ui: {
    loading: false,
  },
  errors: null,
  delete: {
    ui: {
      loading: false,
    },
    errors: null,
  },
  add: {
    ui: {
      loading: false,
    },
    errors: null,
  },
}

const slice = createSlice({
  name: 'favoriteCars',
  initialState,
  reducers,
})

export const { actions, reducer, name: sliceKey } = slice
