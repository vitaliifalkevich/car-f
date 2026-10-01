import { SearchCarItem, SearchCarsPayload } from '@handber/natachke-api-client'
import { CarInfoImages } from '../types'

export interface ISearchNavigation {
  [URL: string]: {
    prev?: string
    next?: string
  }
}

export interface ISearchCar extends Omit<SearchCarItem, 'images'> {
  shortDescription: string
  defaultImage?: string
  images: CarInfoImages | null
}

export interface IState {
  data: ISearchCar[]
  navigation: ISearchNavigation
  prevSearchUrl?: string | null
  count?: number
  ui: {
    loading: boolean
  }
  errors: string | null
}

export interface ISearchPayload extends SearchCarsPayload {
  currentPage: number
}
