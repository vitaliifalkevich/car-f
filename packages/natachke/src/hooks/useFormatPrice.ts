import config from 'config'
import { useCallback } from 'react'
import { useSelector } from 'react-redux'
import { getLanguage } from '../entities/Bootstrap/selectors'
const { currency: currencySettings } = config
interface FormatPrice {
  price?: number
  currency?: string
}
export const useFormatPrice = () => {
  const currentLanguage = useSelector(getLanguage)

  return useCallback(
    ({
      price,
      currency = currencySettings.defaultCurrency.symbol,
    }: FormatPrice): string => {
      const locale =
        currentLanguage === 'ru' || currentLanguage === 'ua' ? 'ru' : 'en'
      return price
        ? `${Number(price.toFixed(2)).toLocaleString(locale)} ${currency}`
        : ''
    },
    [currentLanguage],
  )
}
