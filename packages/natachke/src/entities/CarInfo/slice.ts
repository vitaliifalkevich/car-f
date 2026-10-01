import * as reducers from './reducers'
import { createSlice } from '@reduxjs/toolkit'
import { IState } from './types'

export const initialState: IState = {
  data: null,
  isPriceUnderMarket: false,
  ui: {
    loading: false,
  },
  errors: null,
  complain: {
    ui: {
      loading: false,
    },
    errors: null,
  },
}

const slice = createSlice({
  name: 'carInfo',
  initialState,
  reducers,
})

export const { actions, reducer, name: sliceKey } = slice
