export interface CarInfoImages {
  [SIZE: string]: string[]
}

export interface IImageEntity {
  size: string
  image_key: string
  image_location: string
  default: boolean
}

export interface IBrand {
  value: string
  name: string
}

export interface IModel {
  value: string
  name: string
}

export interface ICarState {
  value: string
  lang_key: string
}

export interface ICountry {
  country_code: string
  lang_key: string
}

export interface IRegion {
  region_code: string
  lang_key: string
}

export interface ICurrency {
  value: string
  symbol: string
}

export interface IEngineType {
  value: string
  lang_key: string
}

export interface ICarEntityResponse {
  id: number
  url?: string
  description?: string
  year?: string
  accidents?: boolean
  price?: number
  price_range?: number
  mileage?: number
  state?: ICarState
  custom_clearance?: boolean
  engine_volume?: number
  engine_type?: IEngineType
  fuel_consumption_city?: number
  fuel_consumption_average?: number
  fuel_consumption_road?: number
  power_kwt?: number
  video_review?: string
  vin?: string
  created_at?: string
  country: ICountry
  images: IImageEntity[]
  brand?: IBrand
  model: IModel
  region: IRegion
  currency: ICurrency
}

export interface ICarEntity extends Omit<ICarEntityResponse, 'images'> {
  images: CarInfoImages
}
