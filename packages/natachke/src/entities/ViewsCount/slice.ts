import * as reducers from './reducers'
import { createSlice } from '@reduxjs/toolkit'
import { IState } from './types'

export const initialState: IState = {
  ui: {
    loading: false,
  },
  errors: null,
  history: {
    ui: {
      loading: false,
    },
    data: {},
    isEmptyHistory: true,
    errors: null,
  },
}

const slice = createSlice({
  name: 'viewsCount',
  initialState,

  reducers,
})

export const { actions, reducer, name: sliceKey } = slice
