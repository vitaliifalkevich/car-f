import {
  CreateCarResponseCarImages,
  SearchCarItem,
} from '@handber/natachke-api-client'
import { CarInfoImages } from './types'
import { getCarImageUrl, sortImagesByDefault } from '../utils'
import { ISearchCar, ISearchNavigation } from './Search/types'
import { IMAGE_SiZES } from '../config'

export const normalizeImages = (
  images: CreateCarResponseCarImages[],
): CarInfoImages =>
  sortImagesByDefault(images).reduce((acc, item) => {
    const prevArray = acc[String(item.size)] ?? []
    return {
      ...acc,
      [String(item.size)]: [
        ...prevArray,
        getCarImageUrl(item.image_key, item.size),
      ],
    }
  }, {}) as CarInfoImages

export const normalizeSearchCars = (
  cars?: SearchCarItem[] | Array<SearchCarItem>,
): ISearchCar[] => {
  return (
    cars?.map(car => {
      const images = car?.images ? normalizeImages(car?.images) : null

      const defaultImage = car?.images?.find(
        item => item.size === IMAGE_SiZES.MD && item['default'] === true,
      )

      return {
        ...car,
        images,
        defaultImage:
          defaultImage &&
          getCarImageUrl(defaultImage.image_key, defaultImage.size),
        shortDescription: car.description?.slice(0, 100) + '...' || '',
      }
    }) || []
  )
}

export const prepareCarNavigation = (cars: ISearchCar[]): ISearchNavigation => {
  return cars.reduce((acc, car, currentIndex) => {
    return {
      ...acc,
      [String(car.url)]: {
        prev: cars?.[currentIndex - 1]?.url,
        next: cars?.[currentIndex + 1]?.url,
      },
    }
  }, {})
}
