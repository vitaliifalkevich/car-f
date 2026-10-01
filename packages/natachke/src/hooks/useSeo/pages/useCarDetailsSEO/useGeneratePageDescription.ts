import { ICarEntity } from 'entities/CarInfo/types'
import { useTranslation } from 'react-i18next'
import { useCallback } from 'react'
import { useFormatPrice } from 'hooks/useFormatPrice'
import setMetaTagByName from '../../utils/setMetaTagByName'
import setMetaTagByProperty from '../../utils/setMetaTagByProperty'

export const useGeneratePageDescription = (carData: ICarEntity | null) => {
  const { t, ready } = useTranslation('meta', { useSuspense: false })
  const { t: tDef, ready: readyDef } = useTranslation('translation', {
    useSuspense: false,
  })
  const formatPrice = useFormatPrice()

  return useCallback(() => {
    if (!ready || !readyDef || !carData) return

    const descriptionText = t('car.description', {
      brand: carData?.brand?.name,
      model: carData?.model?.name,
      year: carData?.year,
      body: tDef(`bodyTypeOptions.${carData?.body_type?.value}`)?.toLowerCase(),
      color: tDef(`colorOptions.${carData?.color?.value}`)?.toLowerCase(),
      fuel: tDef(`fuelOptions.${carData?.engine_type?.value}`)?.toLowerCase(),
      engineVolume: carData?.engine_volume,
      mileage: carData?.mileage,
      price: formatPrice({
        price: carData?.price,
      }),
      sellerName: `${carData?.user?.first_name} ${
        carData.user?.last_name || ''
      }`,
    })

    setMetaTagByName('description', descriptionText)
    setMetaTagByProperty('og:description', descriptionText)
    setMetaTagByProperty('twitter:description', descriptionText)
  }, [carData, formatPrice, ready, readyDef, t, tDef])
}
