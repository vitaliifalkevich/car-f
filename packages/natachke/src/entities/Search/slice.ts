import * as reducers from './reducers'
import { createSlice } from '@reduxjs/toolkit'
import { IState } from './types'

export const initialState: IState = {
  data: [],
  prevSearchUrl: null,
  navigation: {},
  count: 0,
  ui: {
    loading: false,
  },
  errors: null,
}

const slice = createSlice({
  name: 'search',
  initialState,
  reducers,
})

export const { actions, reducer, name: sliceKey } = slice
