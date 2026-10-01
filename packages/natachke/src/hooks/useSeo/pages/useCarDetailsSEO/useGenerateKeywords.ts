import { ICarEntity } from 'entities/CarInfo/types'
import { useTranslation } from 'react-i18next'
import { useCallback } from 'react'
import setMetaTagByName from '../../utils/setMetaTagByName'
import { useRegion } from 'hooks/useRegion'

export const useGenerateKeywords = (carData: ICarEntity | null) => {
  const { t, ready } = useTranslation('meta', { useSuspense: false })
  const { t: tDef, ready: readyDef } = useTranslation('translation', {
    useSuspense: false,
  })

  const getRegion = useRegion()

  const prepareShortDescription = useCallback(str => {
    const slicedAndPure = str
      ?.slice(0, 100)
      .trim()
      .replace(/<\/?[a-zA-Z]+>/gi, '')

    const tmpArr = slicedAndPure.split('.')

    if (tmpArr[1]) return (tmpArr[0] || '') + ', ' + (tmpArr[1] || '')
    return tmpArr[0] || ''
  }, [])

  return useCallback(() => {
    if (!ready || !readyDef || !carData) return

    setMetaTagByName(
      'keywords',
      t('car.keywords', {
        region: carData?.region?.region_code
          ? getRegion(carData?.region?.region_code)
          : '',

        brand: carData?.brand?.name,
        model: carData?.model?.name,
        body: tDef(
          `bodyTypeOptions.${carData?.body_type?.value}`,
        )?.toLowerCase(),
        shortDescription: prepareShortDescription(carData.description),
        mileage: carData?.mileage,
        fuel: tDef(`fuelOptions.${carData?.engine_type?.value}`)?.toLowerCase(),
        engineVolume: carData?.engine_volume,
        transmission: tDef(
          `transmissionOptions.${carData?.transmission?.value}`,
        )?.toLowerCase(),
      }),
    )
  }, [carData, getRegion, prepareShortDescription, ready, readyDef, t, tDef])
}
