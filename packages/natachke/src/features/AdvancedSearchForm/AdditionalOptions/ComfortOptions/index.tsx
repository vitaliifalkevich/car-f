import React, { useMemo, useState } from 'react'
import {
  AddHiddenOptionButtonWrapper,
  HiddenOptionsContainer,
  OptionTitle,
} from '../../styled'
import { AddNew } from 'ui/SearchElements'
import { Field } from 'react-final-form'
import { InputCheckbox } from 'ui/Inputs'
import { useTranslation } from 'react-i18next'
import { useBreakpoint } from 'MediaQueriesProvider'
import { useOptions } from 'hooks'
import { useSelector } from 'react-redux'
import { getCarOptionsData } from 'entities/Car/selectors'
import { getQueriesAsObject } from 'routes'

const SecurityOptions: React.FC<{ optionsDividedIdx: number }> = ({
  optionsDividedIdx,
}) => {
  const { t } = useTranslation('translation', { useSuspense: false })
  const breakpoints = useBreakpoint()
  const queries = useMemo(() => getQueriesAsObject(), [])
  const [showComfort, showComfortFields] = useState(!!queries?.comfort)

  const carOptionsData = useSelector(getCarOptionsData)

  const comfortOptions = useOptions(
    carOptionsData?.options,
    'comfort',
    'comfortOptions',
  )

  return (
    <>
      {!showComfort && (
        <AddHiddenOptionButtonWrapper>
          {!breakpoints.mobile && <div />}
          <div>
            <AddNew
              onClick={() => {
                showComfortFields(true)
              }}
              name={t('comfort')}
            />
          </div>
        </AddHiddenOptionButtonWrapper>
      )}
      {showComfort && (
        <HiddenOptionsContainer>
          <OptionTitle>{t('comfort')}</OptionTitle>
          {comfortOptions.map((item, idx) => {
            if (idx % optionsDividedIdx === 0 && idx !== 0)
              return (
                <React.Fragment key={`comfort${idx}`}>
                  {!breakpoints.mobile && <div />}
                  <Field
                    key={`comfort${item.value}${idx}`}
                    name="comfort"
                    type="checkbox"
                    value={item.value}
                    id={item.value}
                    render={({ input }) => (
                      <InputCheckbox
                        {...input}
                        label={item.label}
                        id={String(item.value)}
                      />
                    )}
                  />
                </React.Fragment>
              )
            return (
              <Field
                key={`comfort${item.value}${idx}`}
                name="comfort"
                type="checkbox"
                value={item.value}
                id={item.value}
                render={({ input }) => (
                  <InputCheckbox
                    {...input}
                    label={item.label}
                    id={String(item.value)}
                  />
                )}
              />
            )
          })}
        </HiddenOptionsContainer>
      )}
    </>
  )
}

export default SecurityOptions
