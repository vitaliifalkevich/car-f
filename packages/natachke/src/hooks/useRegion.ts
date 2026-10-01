import { useCallback } from 'react'
import { useRegionsByCountryCode } from '@handber/countries-and-regions'
import config from 'config'
import { useSelector } from 'react-redux'
import { getLanguage } from '../entities/Bootstrap/selectors'
const { currentCountryCode } = config

export const useRegion = () => {
  const currentLanguage = useSelector(getLanguage)
  const regions = useRegionsByCountryCode({
    lang: currentLanguage,
    countryCode: currentCountryCode,
  })

  return useCallback(
    (regionCode: string) => {
      return regions ? regions[regionCode] : regionCode
    },
    [regions],
  )
}
