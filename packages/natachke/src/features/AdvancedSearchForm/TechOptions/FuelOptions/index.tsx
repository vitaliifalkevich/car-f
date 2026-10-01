import React from 'react'
import { useFuelOptions, useGenerateSlideBlocks } from 'hooks'
import { FormItemContainer, OptionTitle } from '../../styled'
import { Field } from 'react-final-form'
import { InputCheckbox } from 'ui/Inputs'
import { useTranslation } from 'react-i18next'
import { useBreakpoint } from 'MediaQueriesProvider'
import { useSelector } from 'react-redux'
import { getCarOptionsData } from 'entities/Car/selectors'

const FuelOptions: React.FC = () => {
  const { t } = useTranslation('translation', { useSuspense: false })
  const breakpoints = useBreakpoint()
  const carOptionsData = useSelector(getCarOptionsData)
  const fuelOptions = useFuelOptions(carOptionsData?.engineTypes)

  const fuelOptionsBlocks = useGenerateSlideBlocks({
    cards: fuelOptions,
    countCards: 3,
    isMobile: breakpoints.mobile,
  })

  return (
    <FormItemContainer align="baseline">
      <OptionTitle>{t('fuelOptions.title')}</OptionTitle>
      {fuelOptionsBlocks.map((block, idx) => (
        <div key={`fuelOptions${idx}`}>
          {block.map((item, idx) => (
            <Field
              key={`fuelOptions${item.value}${idx}`}
              name="fuel"
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

export default FuelOptions
