import { FavoriteCar } from '@handber/natachke-api-client'
import { CarInfoImages } from '../types'

export interface IFavoriteCar extends Omit<FavoriteCar, 'images'> {
  shortDescription?: string
  defaultImage?: string
  images: CarInfoImages | null
}

export interface IState {
  delete: {
    ui: {
      loading: boolean
    }
    errors: string | null
  }
  add: {
    ui: {
      loading: boolean
    }
    errors: string | null
  }
  data: IFavoriteCar[]
  ui: {
    loading: boolean
  }
  errors: string | null
}
