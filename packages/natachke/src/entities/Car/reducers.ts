import { PayloadAction } from '@reduxjs/toolkit'
import {
  CarCreatePayloadWithAction,
  CarEditPayloadWithAction,
  IState,
  ModelsByBrandResponse,
  EDIT_CAR_DATA_STATE,
} from './types'
import {
  CarInfoResponse,
  CarInitialOptionsResponse,
  CreateCarResponseCarImages,
} from '@handber/natachke-api-client'

export const startGetInitialOptions = (state: IState) => {
  state.initialOptions.ui.loading = true
}

export const gettingInitialOptionsFinish = (
  state: IState,
  action: PayloadAction<CarInitialOptionsResponse>,
) => {
  state.initialOptions.data = action.payload
  state.initialOptions.ui.loading = false
}

export const gettingInitialOptionsErrors = (
  state: IState,
  action: PayloadAction<string | null>,
) => {
  state.initialOptions.errors = action.payload
  state.initialOptions.ui.loading = false
}

export const startGettingModelsByBrand = (
  state: IState,
  action: PayloadAction<string>,
) => {
  state.models.ui.loading = true
}

export const gettingModelsByBrandFinish = (
  state: IState,
  action: PayloadAction<ModelsByBrandResponse[]>,
) => {
  state.models.data = action.payload
  state.models.ui.loading = false
}

export const gettingModelsByBrandErrors = (
  state: IState,
  action: PayloadAction<string | null>,
) => {
  state.models.errors = action.payload
  state.models.ui.loading = false
}

export const startGettingModelsForBrands = (
  state: IState,
  action: PayloadAction<string>,
) => {
  state.allModelsByBrand.ui.loading = true
}

export const gettingModelsForBrandsFinish = (
  state: IState,
  action: PayloadAction<{ brand: string; models: ModelsByBrandResponse[] }>,
) => {
  state.allModelsByBrand.data[action.payload.brand] = action.payload.models
}

export const gettingModelsForBrandsErrors = (
  state: IState,
  action: PayloadAction<string | null>,
) => {
  state.allModelsByBrand.errors = action.payload
  state.allModelsByBrand.ui.loading = false
}

export const startAddingCarPhotos = (
  state: IState,
  action: PayloadAction<{
    files: File[]
    getRecaptchaToken: () => Promise<string | undefined>
  }>,
) => {
  state.photos.add.loading = true
}

export const setGuestKey = (
  state: IState,
  action: PayloadAction<{ guestKey: string | null }>,
) => {
  state.photos.data.guestKey = action.payload.guestKey
}

export const finishAddingCarPhotos = (
  state: IState,
  action: PayloadAction<{
    images: CreateCarResponseCarImages[]
  }>,
) => {
  state.photos.data.images = action.payload.images
  state.photos.errors = null
}

export const confirmFinishAddingCarPhotos = (state: IState) => {
  state.photos.add.loading = false
}

export const clearCarPhotosFromStateAfterCarCreated = (state: IState) => {
  state.photos.data.images = []
  state.photos.data.guestKey = null
  state.photos.data.defaultImage = undefined
}

export const addCarPhotosErrors = (
  state: IState,
  action: PayloadAction<string | null>,
) => {
  state.photos.errors = action.payload
}

export const changeDefaultCarImage = (
  state: IState,
  action: PayloadAction<string>,
) => {
  state.photos.data.defaultImage = action.payload
}

export const startRemoveCarPhotos = (
  state: IState,
  action: PayloadAction<{ image: string; carId?: number }>,
) => {
  state.photos.remove.loading = true
}

export const finishRemoveCarPhotos = (state: IState) => {
  state.photos.remove.loading = false
  state.photos.errors = null
}

export const removeCarsErrors = (
  state: IState,
  action: PayloadAction<string | null>,
) => {
  state.photos.remove.loading = false
  state.photos.errors = action.payload
}

export const startCreateCar = (
  state: IState,
  action: PayloadAction<CarCreatePayloadWithAction>,
) => {
  state.createCar.ui.loading = true
}

export const finishCreateCar = (
  state: IState,
  action: PayloadAction<string | null>,
) => {
  state.createCar.ui.loading = false
  state.createCar.data.url = action.payload
}

export const errorsCreateCar = (
  state: IState,
  action: PayloadAction<string | null>,
) => {
  state.createCar.ui.loading = false
  state.createCar.errors = action.payload
}

export const startGettingEditCarData = (
  state: IState,
  action: PayloadAction<string>,
) => {
  state.editCar.ui.carDataLoading = true
}

export const finishGettingEditCarData = (
  state: IState,
  action: PayloadAction<CarInfoResponse>,
) => {
  state.editCar.ui.carDataLoading = false
  state.editCar.prevData = action.payload
  state.editCar.prevDataState = EDIT_CAR_DATA_STATE.READY
  state.editCar.errors = null
}

export const errorsGettingEditCarData = (
  state: IState,
  action: PayloadAction<string | null>,
) => {
  state.editCar.prevData = null
  state.editCar.errors = action.payload
  state.editCar.prevDataState = EDIT_CAR_DATA_STATE.READY
  state.editCar.ui.carDataLoading = false
}

export const resetEditCarData = (state: IState) => {
  state.editCar.prevData = null
  state.editCar.prevDataState = EDIT_CAR_DATA_STATE.INITIAL
  state.editCar.errors = null
  state.editCar.ui.carDataLoading = false
}

export const startEditCar = (
  state: IState,
  action: PayloadAction<CarEditPayloadWithAction>,
) => {
  state.editCar.ui.editLoading = true
}

export const errorsEditCar = (
  state: IState,
  action: PayloadAction<string | null>,
) => {
  state.editCar.ui.editLoading = false
  state.editCar.errors = action.payload
}
