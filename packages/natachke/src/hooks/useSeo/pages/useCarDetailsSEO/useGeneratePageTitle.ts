import { ICarEntity } from 'entities/CarInfo/types'
import { useTranslation } from 'react-i18next'
import { useCallback } from 'react'
import setPageTitle from '../../utils/setPageTitle'
import { useFormatPrice } from 'hooks/useFormatPrice'
import setMetaTagByProperty from '../../utils/setMetaTagByProperty'

export const useGeneratePageTitle = (carData: ICarEntity | null) => {
  const { t, ready } = useTranslation('meta', { useSuspense: false })
  const { t: tDef, ready: readyDef } = useTranslation('translation', {
    useSuspense: false,
  })
  const formatPrice = useFormatPrice()

  return useCallback(() => {
    if (!ready || !readyDef || !carData) return

    const titleText = t('car.title', {
      brand: carData?.brand?.name,
      model: carData?.model?.name,
      year: carData?.year,
      fuel: tDef(`fuelOptions.${carData?.engine_type?.value}`)?.toLowerCase(),
      engineVolume: carData?.engine_volume,
      body: tDef(`bodyTypeOptions.${carData?.body_type?.value}`)?.toLowerCase(),
      type: tDef(`typeCarOptions.${carData?.sale_type?.value}`)?.toLowerCase(),
      price: formatPrice({
        price: carData?.price,
      }),
    })
    setPageTitle(titleText)

    setMetaTagByProperty('og:title', titleText)
    setMetaTagByProperty('twitter:title', titleText)
  }, [carData, formatPrice, ready, readyDef, t, tDef])
}
