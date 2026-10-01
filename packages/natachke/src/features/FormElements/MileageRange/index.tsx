import React, { ReactNode } from 'react'
import Label from '../../MainFilters/Label'
import { useTranslation } from 'react-i18next'
import { InputRangeText } from 'ui/Inputs'

interface MileageRangeProps {
  customLabel?: string | ReactNode
  showLabel?: boolean
  onChangeHandler?: () => void
}

const MileageRange: React.FC<MileageRangeProps> = ({
  customLabel,
  showLabel,
  onChangeHandler,
}) => {
  const { t } = useTranslation()

  return (
    <>
      <InputRangeText
        placeholderFrom={t('from')}
        placeholderTo={t('to')}
        onChangeHandler={onChangeHandler}
        type="number"
        fieldName="mileage"
        label={
          showLabel || customLabel ? (
            customLabel ? (
              <>{customLabel}</>
            ) : (
              <Label htmlFor="mileageRange">
                {t('mileage')}, ({t('mileageUnits')})
              </Label>
            )
          ) : null
        }
      />
    </>
  )
}

export default MileageRange
