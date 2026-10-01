import { takeLatest, all, fork, call, put, select } from 'redux-saga/effects'
import { v4 as uuidv4 } from 'uuid'
import { actions } from './slice'
import {
  getEditCarData as getEditMyCarData,
  getModelsByBrandName,
} from './selectors'
import { getCarApi, getImagesApi, needToRestartSaga } from 'api'
import config, { IMAGE_SiZES } from 'config'
import { PayloadAction } from '@reduxjs/toolkit'
import {
  getCarDefaultImage,
  getCarImages,
  getCarImagesGuestToken,
} from './selectors'
import { getCSRF, loadProfile } from '../Bootstrap/saga'
import { CreateCarResponseCarImages } from '@handber/natachke-api-client'
import { CarCreatePayloadWithAction, CarEditPayloadWithAction } from './types'
import { setAuthToken, sortImagesByDefault, STORAGE_TYPES } from '../../utils'
import { gtagEvent, GtagEvents } from '../../analytics'
const { currentCountryCode, authToken } = config

// ACTIONS

export function* getInitialOptions() {
  yield put(actions.startGetInitialOptions())
  try {
    const carAPi = getCarApi()
    const response = yield call(() => carAPi.getCarOptions(currentCountryCode))
    yield put(actions.gettingInitialOptionsFinish(response.data))
    yield put(actions.gettingInitialOptionsErrors(null))
  } catch (e) {
    yield put(actions.gettingInitialOptionsErrors(e?.response?.data?.message))
  }
}

export function* getModelsByBrand(action: PayloadAction<string>) {
  try {
    const carAPi = getCarApi()
    const response = yield call(() =>
      carAPi.getCarModelsByBrand(action.payload),
    )
    yield put(actions.gettingModelsByBrandFinish(response.data))
    yield put(actions.gettingModelsByBrandErrors(null))
  } catch (e) {
    yield put(actions.gettingModelsByBrandErrors(e?.response?.data?.message))
  }
}

export function* getModelsForBrands(action: PayloadAction<string>) {
  const modelsState = yield select(getModelsByBrandName(action.payload))
  if (modelsState) return

  try {
    const carAPi = getCarApi()
    const response = yield call(() =>
      carAPi.getCarModelsByBrand(action.payload),
    )
    yield put(
      actions.gettingModelsForBrandsFinish({
        brand: action.payload,
        models: response.data,
      }),
    )
    yield put(actions.gettingModelsForBrandsErrors(null))
  } catch (e) {
    yield put(actions.gettingModelsForBrandsErrors(e?.response?.data?.message))
  }
}

const getImagesOneSize = (
  images: CreateCarResponseCarImages[],
  size: string,
): CreateCarResponseCarImages[] => {
  return images.filter(image => image.size === size)
}

export function* uploadImages(
  action: PayloadAction<{
    files: File[]
    getRecaptchaToken: () => Promise<string | undefined>
  }>,
) {
  const editCarData = yield select(getEditMyCarData)

  for (const file of action.payload.files) {
    try {
      const recaptchaToken = yield action.payload.getRecaptchaToken()
      const existedGuestKey = yield select(getCarImagesGuestToken)
      const guestKey: string = existedGuestKey || uuidv4()
      if (!existedGuestKey)
        yield put(actions.setGuestKey({ guestKey: guestKey }))
      const csrf = yield call(getCSRF)
      const imagesAPi = getImagesApi({
        csrf,
        recaptchaToken: recaptchaToken,
      })
      const defaultImage = yield select(getCarDefaultImage)
      const existedImages = yield select(getCarImages)
      const response = yield call(() =>
        imagesAPi.uploadImage([file], guestKey, editCarData?.id),
      )
      const preparedUploadedImage = getImagesOneSize(
        response.data.image,
        IMAGE_SiZES.SM,
      )

      const images = {
        guestKey: response.data.guestKey,
        images: [...existedImages, ...preparedUploadedImage],
      }

      yield put(actions.finishAddingCarPhotos(images))

      if (!defaultImage)
        yield put(actions.changeDefaultCarImage(images.images[0].image_key))
      yield put(actions.addCarPhotosErrors(null))
      gtagEvent(GtagEvents.UPLOAD_IMAGES)
    } catch (e) {
      yield put(actions.addCarPhotosErrors(e?.response?.data?.message))
      gtagEvent(GtagEvents.UPLOAD_IMAGES_ERROR, {
        error: e?.response?.data?.message,
      })
    }
  }

  yield put(actions.confirmFinishAddingCarPhotos())
}

function* updateCarImagesByGuestId(carId?: number, tryNumber?: number) {
  try {
    const csrf = yield call(getCSRF)
    const imagesAPi = getImagesApi({ csrf })
    const guestId = yield select(getCarImagesGuestToken)
    const response = yield call(() =>
      imagesAPi.getCarImages({
        guestId,
        carId,
      }),
    )
    const filteredImages = getImagesOneSize(
      response.data.images,
      IMAGE_SiZES.SM,
    )

    yield put(
      actions.finishAddingCarPhotos({
        images: filteredImages,
      }),
    )
    yield put(actions.addCarPhotosErrors(null))
  } catch (e) {
    const checkSagaRestart = needToRestartSaga(e, tryNumber)
    if (checkSagaRestart?.restart) {
      yield fork(updateCarImagesByGuestId, carId, checkSagaRestart.counter)
    } else yield put(actions.addCarPhotosErrors(e?.response?.data?.message))
  }
}

export function* removeCarPhotos(
  action: PayloadAction<{ image: string; carId?: number }>,
  tryNumber?: number,
) {
  try {
    const csrf = yield call(getCSRF)
    const imagesAPi = getImagesApi({ csrf })
    const token = yield select(getCarImagesGuestToken)
    yield call(() =>
      imagesAPi.deleteImages({
        imageKeys: [action.payload.image],
        guestId: token,
        carId: action.payload.carId,
      }),
    )

    yield updateCarImagesByGuestId(action.payload.carId)

    const existedImages = yield select(getCarImages)
    const defaultImage = yield select(getCarDefaultImage)

    let shouldUpdateDefaultImage = !existedImages.find(
      item => item.image_key === defaultImage,
    )

    if (shouldUpdateDefaultImage) {
      yield put(actions.changeDefaultCarImage(existedImages[0]?.image_key))
    }

    yield put(actions.finishRemoveCarPhotos())
    yield put(actions.removeCarsErrors(null))
  } catch (e) {
    const checkSagaRestart = needToRestartSaga(e, tryNumber)
    if (checkSagaRestart?.restart) {
      yield fork(removeCarPhotos, action, checkSagaRestart.counter)
    } else yield put(actions.removeCarsErrors(e?.response?.data?.message))
  }
}

function* createCar(
  action: PayloadAction<CarCreatePayloadWithAction>,
  tryNumber?: number,
) {
  try {
    const csrf = yield call(getCSRF)
    const carAPi = getCarApi({
      csrf,
      recaptchaToken: action.payload.recaptchaToken,
    })
    const response = yield call(() => carAPi.createCar(action.payload.data))

    yield put(actions.finishCreateCar(response.data.car.url))
    yield put(actions.errorsCreateCar(null))

    setAuthToken(authToken, response.data.user.token, STORAGE_TYPES.LOCAL)
    yield call(loadProfile)
    yield put(actions.clearCarPhotosFromStateAfterCarCreated())
    action.payload.successAction()
    //send analytics event
    gtagEvent(GtagEvents.SELL_CAR)
  } catch (e) {
    const checkSagaRestart = needToRestartSaga(e, tryNumber)
    if (checkSagaRestart?.restart) {
      yield fork(createCar, action, checkSagaRestart.counter)
    } else {
      yield put(
        actions.errorsCreateCar(
          e?.response?.data?.message || 'unknown_car_error',
        ),
      )
      gtagEvent(GtagEvents.SELL_CAR_ERROR, {
        error: e?.response?.data?.message,
      })
    }
  }
}

function* editCar(
  action: PayloadAction<CarEditPayloadWithAction>,
  tryNumber?: number,
) {
  try {
    const csrf = yield call(getCSRF)
    const carAPi = getCarApi({
      csrf,
      recaptchaToken: action.payload.recaptchaToken,
    })
    const response = yield call(() => carAPi.editCar(action.payload.data))

    yield put(actions.finishCreateCar(response.data.car.url))
    yield put(actions.errorsEditCar(null))
    yield put(actions.clearCarPhotosFromStateAfterCarCreated())
    action.payload.successAction()
    //send analytics event
    gtagEvent(GtagEvents.EDIT_CAR)
  } catch (e) {
    const checkSagaRestart = needToRestartSaga(e, tryNumber)
    if (checkSagaRestart?.restart) {
      yield fork(editCar, action, checkSagaRestart.counter)
    } else {
      yield put(
        actions.errorsEditCar(
          e?.response?.data?.message || 'unknown_car_error',
        ),
      )
      gtagEvent(GtagEvents.EDIT_CAR_ERROR, {
        error: e?.response?.data?.message,
      })
    }
  }
}

function* getEditCarData(action: PayloadAction<string>) {
  try {
    const carAPi = getCarApi()
    const response = yield call(() => carAPi.getEditMyCarInfo(action.payload))
    yield put(actions.finishGettingEditCarData(response.data))
    const filteredImages = sortImagesByDefault(
      getImagesOneSize(response.data.car.images, IMAGE_SiZES.SM),
    )

    yield put(actions.setGuestKey({ guestKey: null }))

    yield put(
      actions.finishAddingCarPhotos({
        images: filteredImages,
      }),
    )

    yield put(
      actions.changeDefaultCarImage(
        response.data.car.defaultImage || filteredImages[0].image_key,
      ),
    )
  } catch (e) {
    yield put(actions.errorsGettingEditCarData(e?.response?.data?.message))
  }
}

// WATCHERS

function* watchGettingModelsByBrand() {
  yield takeLatest(actions.startGettingModelsByBrand.type, getModelsByBrand)
}
function* watchGettingModelsForBrand() {
  yield takeLatest(actions.startGettingModelsForBrands.type, getModelsForBrands)
}

function* watchUploadCarImage() {
  yield takeLatest(actions.startAddingCarPhotos.type, uploadImages)
}

function* watchRemoveCarImages() {
  yield takeLatest(actions.startRemoveCarPhotos.type, removeCarPhotos)
}

function* watchCreateCar() {
  yield takeLatest(actions.startCreateCar.type, createCar)
}

function* watchGetEditCarData() {
  yield takeLatest(actions.startGettingEditCarData.type, getEditCarData)
}

function* watchEditCar() {
  yield takeLatest(actions.startEditCar.type, editCar)
}

export default function* root() {
  yield all([
    fork(watchGettingModelsByBrand),
    fork(watchUploadCarImage),
    fork(watchRemoveCarImages),
    fork(watchCreateCar),
    fork(watchGetEditCarData),
    fork(watchEditCar),
    fork(watchGettingModelsForBrand),
  ])
}
