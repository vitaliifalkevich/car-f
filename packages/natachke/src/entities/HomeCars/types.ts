import { SearchCarItem } from '@handber/natachke-api-client'
import { CarInfoImages } from '../types'

export interface ISearchCar extends Omit<SearchCarItem, 'images'> {
  shortDescription: string
  defaultImage?: string
  images: CarInfoImages | null
}

export interface IState {
  latestCars: {
    data: ISearchCar[]
    ui: {
      loading: boolean
    }
    errors: string | null
  }
  topCars: {
    data: ISearchCar[]
    ui: {
      loading: boolean
    }
    errors: string | null
  }
  mostViewedCars: {
    data: ISearchCar[]
    ui: {
      loading: boolean
    }
    errors: string | null
  }
  trueCars: {
    data: ISearchCar[]
    ui: {
      loading: boolean
    }
    errors: string | null
  }
}
