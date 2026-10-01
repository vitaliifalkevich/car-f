import React from 'react'
import { useGenerateSlideBlocks, useTransmissionOptions } from 'hooks'
import { FormItemContainer, OptionTitle } from '../../styled'
import { Field } from 'react-final-form'
import { InputCheckbox } from 'ui/Inputs'
import { useTranslation } from 'react-i18next'
import { useBreakpoint } from 'MediaQueriesProvider'
import { useSelector } from 'react-redux'
import { getCarOptionsData } from 'entities/Car/selectors'

const TransmissionOptions: React.FC = () => {
  const { t } = useTranslation('translation', { useSuspense: false })
  const breakpoints = useBreakpoint()
  const carOptionsData = useSelector(getCarOptionsData)
  const transmissionOptions = useTransmissionOptions(
    carOptionsData?.transmissions,
  )
  const transmissionOptionsBlocks = useGenerateSlideBlocks({
    cards: transmissionOptions,
    countCards: 2,
    isMobile: breakpoints.mobile,
  })

  return (
    <FormItemContainer align="baseline">
      <OptionTitle>{t('transmissionOptions.title')}</OptionTitle>
      {transmissionOptionsBlocks.map((block, idx) => (
        <div key={`transmissionOptions${idx}`}>
          {block.map((item, idx) => (
            <Field
              key={`transmissionOptions${item.value}${idx}`}
              name="transmission"
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

export default TransmissionOptions
