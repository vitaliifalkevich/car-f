import { prop, sortWith, descend } from 'ramda'
import { CreateCarResponseCarImages } from '@handber/natachke-api-client'

export const sortImagesByDefault = (
  images: CreateCarResponseCarImages[],
): CreateCarResponseCarImages[] => {
  return sortWith([descend(prop('default'))])(images)
}
