import React from 'react'
import { useDriveOptions, useGenerateSlideBlocks } from 'hooks'
import { FormItemContainer, OptionTitle } from '../../styled'
import { Field } from 'react-final-form'
import { InputCheckbox } from 'ui/Inputs'
import { useTranslation } from 'react-i18next'
import { useBreakpoint } from 'MediaQueriesProvider'
import { useSelector } from 'react-redux'
import { getCarOptionsData } from 'entities/Car/selectors'

const DriveOptions: React.FC = () => {
  const { t } = useTranslation('translation', { useSuspense: false })
  const breakpoints = useBreakpoint()
  const carOptionsData = useSelector(getCarOptionsData)
  const driveOptions = useDriveOptions(carOptionsData?.drives)
  const driveOptionsBlocks = useGenerateSlideBlocks({
    cards: driveOptions,
    countCards: 2,
    isMobile: breakpoints.mobile,
  })
  return (
    <FormItemContainer align="baseline">
      <OptionTitle>{t('drive')}</OptionTitle>
      {driveOptionsBlocks.map((block, idx) => (
        <div key={`driveOptions${idx}`}>
          {block.map((item, idx) => (
            <Field
              key={`driveOptions${item.value}${idx}`}
              name="drive"
              type="checkbox"
              value={item.value}
              id={item.value}
              render={({ input }) => (
                <InputCheckbox {...input} label={item.label} id={item.value} />
              )}
            />
          ))}
        </div>
      ))}
    </FormItemContainer>
  )
}

export default DriveOptions
