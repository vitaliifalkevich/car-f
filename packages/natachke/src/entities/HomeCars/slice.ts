import * as reducers from './reducers'
import { createSlice } from '@reduxjs/toolkit'
import { IState } from './types'

export const initialState: IState = {
  latestCars: {
    data: [],
    ui: {
      loading: false,
    },
    errors: null,
  },
  topCars: {
    data: [],
    ui: {
      loading: false,
    },
    errors: null,
  },
  mostViewedCars: {
    data: [],
    ui: {
      loading: false,
    },
    errors: null,
  },
  trueCars: {
    data: [],
    ui: {
      loading: false,
    },
    errors: null,
  },
}

const slice = createSlice({
  name: 'homeCars',
  initialState,
  reducers,
})

export const { actions, reducer, name: sliceKey } = slice
