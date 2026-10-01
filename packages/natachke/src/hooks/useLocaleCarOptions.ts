import { CarInitialOptionsResponseOptions } from '@handber/natachke-api-client'
import { useTranslation } from 'react-i18next'
import { useMemo } from 'react'

export const useLocaleCarOptions = (
  options: CarInitialOptionsResponseOptions[] = [],
  category: string,
  localeOptions: string,
): string[] => {
  const { t } = useTranslation()
  return useMemo(() => {
    const filteredOptions: string[] = []
    options?.forEach(item => {
      if (item?.category?.value === category) {
        filteredOptions.push(t(`${localeOptions}.${item.value}`))
      }
    })
    return filteredOptions
  }, [category, localeOptions, options, t])
}
