import React, { ReactNode } from 'react'
import Label from '../../MainFilters/Label'
import { useTranslation } from 'react-i18next'
import config from 'config'
import { InputRangeText } from 'ui/Inputs'
const { currency } = config

interface PriceRangeProps {
  hideLabel?: boolean
  customLabel?: string | ReactNode
  onChangeHandler?: () => void
}

const PriceRange: React.FC<PriceRangeProps> = ({
  customLabel,
  onChangeHandler,
  hideLabel,
}) => {
  const { t } = useTranslation()

  return (
    <>
      <InputRangeText
        placeholderFrom={t('from')}
        placeholderTo={t('to')}
        onChangeHandler={onChangeHandler}
        fieldName="price"
        type="number"
        label={
          hideLabel ? undefined : customLabel ? (
            <>{customLabel}</>
          ) : (
            <Label htmlFor="priceRange">
              {t('priceRange')}, {currency.defaultCurrency.symbol}
            </Label>
          )
        }
      />
    </>
  )
}

export default PriceRange
