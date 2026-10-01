import { RootState } from 'store/types'
import { initialState } from './slice'
import { createSelector } from 'reselect'

export const selectCarData = (state: RootState) => state.car || initialState

export const getCarOptionsData = createSelector(
  [selectCarData],
  carData => carData.initialOptions.data,
)

export const getCarOptionsDataLoading = createSelector(
  [selectCarData],
  carData => carData.initialOptions.ui.loading,
)

export const getModelsByBrand = createSelector(
  [selectCarData],
  carData => carData.models.data,
)

export const getModelsByBrandName = (brand: string | null) =>
  createSelector([selectCarData], carData =>
    brand ? carData.allModelsByBrand?.data?.[brand] : [],
  )

export const getCarImages = createSelector(
  [selectCarData],
  carData => carData.photos.data.images,
)

export const getCarImagesGuestToken = createSelector(
  [selectCarData],
  carData => carData.photos.data.guestKey,
)

export const getCarDefaultImage = createSelector(
  [selectCarData],
  carData => carData.photos.data.defaultImage,
)

export const getUploadCarImagesLoading = createSelector(
  [selectCarData],
  carData => carData.photos.add.loading,
)
export const getCarImagesErrors = createSelector(
  [selectCarData],
  carData => carData.photos.errors,
)

export const getRemoveCarImagesLoading = createSelector(
  [selectCarData],
  carData => carData.photos.remove.loading,
)

export const getCreateCarLoading = createSelector(
  [selectCarData],
  carData => carData.createCar.ui.loading,
)

export const getCreateCarErrors = createSelector(
  [selectCarData],
  carData => carData.createCar.errors,
)

export const getEditCarLoading = createSelector(
  [selectCarData],
  carData => carData.editCar.ui.editLoading,
)

export const getEditCarErrors = createSelector(
  [selectCarData],
  carData => carData.editCar.errors,
)

export const getCreateCarUrl = createSelector(
  [selectCarData],
  carData => carData.createCar.data.url,
)

export const getEditCarData = createSelector(
  [selectCarData],
  carData => carData.editCar.prevData?.car,
)

export const getIsCarCanBeEdited = createSelector(
  [selectCarData],
  carData => !!carData.editCar.prevData?.car,
)

export const getEditMyCarDataLoading = createSelector(
  [selectCarData],
  carData => carData.editCar.ui?.carDataLoading,
)

export const getEditMyCarDataState = createSelector(
  [selectCarData],
  carData => carData.editCar.prevDataState,
)
