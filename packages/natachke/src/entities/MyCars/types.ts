import {
  ChangeCarStatusPayloadStatusEnum,
  MyCar,
} from '@handber/natachke-api-client'
import { CarInfoImages } from '../types'

export interface IMyCar extends Omit<MyCar, 'images'> {
  shortDescription: string
  defaultImage?: string
  images: CarInfoImages | null
}

export enum MY_CAR_CATEGORY {
  ACTIVE = 'active',
  WAITING = 'waiting',
  ARCHIVE = 'archive',
}

export interface MyCarsData {
  [CATEGORY: string]: IMyCar[]
}

export interface IChangeCarStatusPayload {
  carId: number
  status: ChangeCarStatusPayloadStatusEnum
}

export interface IState {
  data: MyCarsData | null
  ui: {
    loading: boolean
  }
  errors: string | null
  changeVisibleStatus: {
    ui: {
      loading: boolean
    }
    errors: string | null
  }
  deleteCar: {
    ui: {
      loading: boolean
    }
    errors: string | null
  }
}
