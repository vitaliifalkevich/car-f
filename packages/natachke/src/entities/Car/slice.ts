import * as reducers from './reducers'
import { createSlice } from '@reduxjs/toolkit'
import { IState, EDIT_CAR_DATA_STATE } from './types'

export const initialState: IState = {
  initialOptions: {
    ui: {
      loading: false,
    },
    data: null,
    errors: null,
  },
  models: {
    ui: {
      loading: false,
    },
    data: [],
    errors: null,
  },
  allModelsByBrand: {
    ui: {
      loading: false,
    },
    data: {},
    errors: null,
  },
  createCar: {
    data: {
      url: null,
    },
    ui: {
      loading: false,
    },
    errors: null,
  },
  editCar: {
    prevData: null,
    prevDataState: EDIT_CAR_DATA_STATE.INITIAL,
    ui: {
      carDataLoading: false,
      editLoading: false,
    },
    errors: null,
  },
  photos: {
    add: {
      loading: false,
    },
    remove: {
      loading: false,
    },
    data: {
      images: [],
      guestKey: null,
      defaultImage: undefined,
    },
    errors: null,
  },
}

const slice = createSlice({
  name: 'car',
  initialState,
  reducers,
})

export const { actions, reducer, name: sliceKey } = slice
