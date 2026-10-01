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
  const [showMultimedia, showMultimediaFields] = useState(!!queries?.multimedia)

  const carOptionsData = useSelector(getCarOptionsData)

  const multimediaOptions = useOptions(
    carOptionsData?.options,
    'multimedia',
    'multimediaOptions',
  )

  return (
    <>
      {!showMultimedia && (
        <AddHiddenOptionButtonWrapper>
          {!breakpoints.mobile && <div />}
          <div>
            <AddNew
              onClick={() => {
                showMultimediaFields(true)
              }}
              name={t('multimedia')}
            />
          </div>
        </AddHiddenOptionButtonWrapper>
      )}
      {showMultimedia && (
        <HiddenOptionsContainer>
          <OptionTitle>{t('multimedia')}</OptionTitle>
          {multimediaOptions.map((item, idx) => {
            if (idx % optionsDividedIdx === 0 && idx !== 0)
              return (
                <React.Fragment key={`multimedia${idx}`}>
                  {!breakpoints.mobile && <div />}
                  <Field
                    key={`multimedia${item.value}${idx}`}
                    name="multimedia"
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
                key={`multimedia${item.value}${idx}`}
                name="multimedia"
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
