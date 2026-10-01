export interface ICarEntity {
  image: string
  title: string
  mileage: string
  price: string
  slug: string
  isLowPrice?: boolean
  isRecommend?: boolean
  engine: string
  fuel: string
  region: string
  isTrueCar?: boolean
  transmission: string
  shortDescription: string
  description: string
  body: string
  color: string
  accidents: boolean
  carState: string
  security?: string[]
  comfort?: string[]
  multimedia?: string[]
  carId: number
  note?: string
}
