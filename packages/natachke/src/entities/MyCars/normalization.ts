import { MY_CAR_CATEGORY, MyCarsData } from './types'
import { normalizeImages } from '../normalization'
import { IMAGE_SiZES } from '../../config'
import { getCarImageUrl } from '../../utils'
import { MyCar } from '@handber/natachke-api-client'

export const normalizeMyCars = (cars: MyCar[]): MyCarsData => {
  return cars.reduce((acc, car) => {
    if (!car?.car_status?.value || !car.visible_status?.value) return acc
    const status =
      car?.car_status?.value === 'approved' &&
      car.visible_status?.value === 'public'
        ? MY_CAR_CATEGORY.ACTIVE
        : (car.car_status?.value === 'review' ||
            car.car_status?.value === 'rejected') &&
          car.visible_status?.value === 'public'
        ? MY_CAR_CATEGORY.WAITING
        : MY_CAR_CATEGORY.ARCHIVE

    const images = car?.images ? normalizeImages(car?.images) : car?.images

    const defaultImage = car?.images?.find(
      item => item.size === IMAGE_SiZES.MD && item['default'] === true,
    )

    const preparedCar = {
      ...car,
      images,
      defaultImage:
        defaultImage &&
        getCarImageUrl(defaultImage.image_key, defaultImage.size),
      shortDescription: car.description?.slice(0, 100) + '...' || '',
    }

    if (acc[status]) {
      return {
        ...acc,
        [status]: [...acc[status], preparedCar],
      }
    }

    return {
      ...acc,
      [status]: [preparedCar],
    }
  }, {} as any)
}
