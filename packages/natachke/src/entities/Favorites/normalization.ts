import { normalizeImages } from '../normalization'
import { IMAGE_SiZES } from '../../config'
import { getCarImageUrl } from '../../utils'
import { FavoriteCar } from '@handber/natachke-api-client'
import { IFavoriteCar } from './types'

export const normalizeFavoriteCars = (cars: FavoriteCar[]): IFavoriteCar[] => {
  return cars.map(car => {
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
  })
}
