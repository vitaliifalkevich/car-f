import * as reducers from './reducers'
import { createSlice } from '@reduxjs/toolkit'
import { IState } from './types'

export const initialState: IState = {
  data: null,
  ui: {
    loading: false,
  },
  errors: null,
  deleteCar: {
    ui: {
      loading: false,
    },
    errors: null,
  },
  changeVisibleStatus: {
    ui: {
      loading: false,
    },
    errors: null,
  },
}

const slice = createSlice({
  name: 'myCars',
  initialState,
  reducers,
})

export const { actions, reducer, name: sliceKey } = slice
