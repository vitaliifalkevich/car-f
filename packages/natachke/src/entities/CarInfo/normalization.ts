import { CarInfoResponseCar } from '@handber/natachke-api-client'
import { ICarEntity } from './types'
import { normalizeImages } from '../normalization'

export const normalizeCar = (
  carData: CarInfoResponseCar,
): ICarEntity | null => {
  if (!carData?.images) return null

  const images = normalizeImages(carData?.images)

  return {
    ...carData,
    images,
  }
}
