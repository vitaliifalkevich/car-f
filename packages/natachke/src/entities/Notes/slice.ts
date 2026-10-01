import * as reducers from './reducers'
import { createSlice } from '@reduxjs/toolkit'
import { IState } from './types'

export const initialState: IState = {
  data: {},
}

const slice = createSlice({
  name: 'notes',
  initialState,
  reducers,
})

export const { actions, reducer, name: sliceKey } = slice
