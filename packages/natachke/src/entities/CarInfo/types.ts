import { CarInfoResponseCar } from '@handber/natachke-api-client'
import { CarInfoImages } from 'entities/types'

export interface ICarEntity extends Omit<CarInfoResponseCar, 'images'> {
  images: CarInfoImages
}

export interface IState {
  data: ICarEntity | null
  isPriceUnderMarket: boolean
  ui: {
    loading: boolean
  }
  errors: string | null
  complain: {
    ui: {
      loading: boolean
    }
    errors: string | null
  }
}
