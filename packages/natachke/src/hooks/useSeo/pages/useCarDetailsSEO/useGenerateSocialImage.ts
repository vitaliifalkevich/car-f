import { ICarEntity } from 'entities/CarInfo/types'
import { useCallback } from 'react'
import setMetaTagByProperty from '../../utils/setMetaTagByProperty'

export const useGenerateSocialImage = (carData: ICarEntity | null) => {
  return useCallback(() => {
    if (carData?.images?.['lg']?.[0]) {
      setMetaTagByProperty('og:image', carData?.images?.['lg']?.[0])
      setMetaTagByProperty('twitter:image', carData?.images?.['lg']?.[0])
    }
  }, [carData])
}
