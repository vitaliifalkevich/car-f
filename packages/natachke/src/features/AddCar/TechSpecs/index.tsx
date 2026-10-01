import React, { useMemo } from 'react'
import { SecondTitle, SecondaryText } from 'ui/Text'
import { useTranslation, Trans } from 'react-i18next'

import { Field, useFormState } from 'react-final-form'
import {
  InputSelect,
  SwitchButton,
  OptionTitle,
  InputTextWithUnits,
  InputText,
  InputCheckbox,
} from 'ui/Inputs'
import {
  useColorOptions,
  useCountryOptions,
  useDriveOptions,
  useFuelOptions,
  useGenerateCarStateOption,
  useGeneratePaintedOption,
  usePowerUnitsOptions,
  useOptions,
  useTransmissionOptions,
  useDoorsOptions,
} from 'hooks'
import MainButton from 'ui/MainButton'
import {
  FormItemContainer,
  NextStepContainer,
  CheckSuccessIcon,
} from '../styled'
import { FieldsContainer } from './styled'
import { AddNew } from 'ui/SearchElements'
import BackTextButton from '../BackTextButton'
import { useSelector } from 'react-redux'
import { getCarOptionsData } from '../../../entities/Car/selectors'
import SetInputsGridContainer from './styled/SetInputsGridContainer'
import ErrorText from '../../../ui/ErrorText'

const BaseInformation: React.FC<{
  setNextStep: () => void
  setPrevStep: () => void
  showSecurity: boolean
  showComfort: boolean
  showMultimedia: boolean
  showSecurityFields: React.Dispatch<React.SetStateAction<boolean>>
  showComfortFields: React.Dispatch<React.SetStateAction<boolean>>
  showMultimediaFields: React.Dispatch<React.SetStateAction<boolean>>
}> = ({
  setNextStep,
  setPrevStep,
  showSecurity,
  showComfort,
  showMultimedia,
  showSecurityFields,
  showComfortFields,
  showMultimediaFields,
}) => {
  const { t } = useTranslation()
  const carOptionsData = useSelector(getCarOptionsData)

  const fuelOptions = useFuelOptions(carOptionsData?.engineTypes)
  const transmissionOptions = useTransmissionOptions(
    carOptionsData?.transmissions,
  )
  const driveOptions = useDriveOptions(carOptionsData?.drives)
  const carStateOptions = useGenerateCarStateOption(carOptionsData?.states)

  const paintedOptions = useGeneratePaintedOption(carOptionsData?.painted)
  const colorOptions = useColorOptions(carOptionsData?.colors)
  const doorsOptions = useDoorsOptions(carOptionsData?.doors)
  const countryOptions = useCountryOptions()
  const securityOptions = useOptions(
    carOptionsData?.options,
    'security',
    'securityOptions',
  )

  const powerOptions = usePowerUnitsOptions()
  const comfortOptions = useOptions(
    carOptionsData?.options,
    'comfort',
    'comfortOptions',
  )
  const multimediaOptions = useOptions(
    carOptionsData?.options,
    'multimedia',
    'multimediaOptions',
  )

  const formState = useFormState()

  const isNextButtonDisabled = useMemo(() => {
    if (!formState.touched) return true
    const errorsCount = Object.keys(formState.errors).length
    if (errorsCount === 0 && Object.keys(formState.touched).length === 0)
      return true
    if (errorsCount > 0) {
      const requiredFieldsThisStep = [
        'fuel',
        'transmission',
        'drive',
        'carState',
        'painted',
        'color',
      ]

      return !!requiredFieldsThisStep.find(item => formState.errors[item])
    }
  }, [formState])

  return (
    <FieldsContainer>
      <div>
        <section>
          <SecondTitle>
            {t('step') + ' 5. ' + t('createCar.techSpec')}
          </SecondTitle>
          <SecondaryText>
            <Trans>{t('createCar.techSpecDescription')}</Trans>
          </SecondaryText>

          <FormItemContainer>
            <Field
              name="fuel"
              render={({ input, meta }) => (
                <>
                  <div>
                    <OptionTitle>{t('fuel')}</OptionTitle>
                    {meta.valid && input.value && <CheckSuccessIcon />}
                  </div>

                  <InputSelect
                    {...input}
                    options={fuelOptions}
                    placeholder={t('selectFuel')}
                  />
                </>
              )}
            />
          </FormItemContainer>
          <FormItemContainer>
            <Field
              name="transmission"
              render={({ input, meta }) => (
                <>
                  <div>
                    <OptionTitle>{t('transmissionOptions.title')}</OptionTitle>
                    {meta.valid && input.value && <CheckSuccessIcon />}
                  </div>
                  <InputSelect {...input} options={transmissionOptions} />
                </>
              )}
            />
          </FormItemContainer>
          <FormItemContainer>
            <Field
              name="drive"
              render={({ input, meta }) => (
                <>
                  <div>
                    <OptionTitle>{t('drive')}</OptionTitle>
                    {meta.valid && input.value && <CheckSuccessIcon />}
                  </div>

                  <InputSelect {...input} options={driveOptions} />
                </>
              )}
            />
          </FormItemContainer>
          <FormItemContainer>
            <Field
              name="carState"
              render={({ input, meta }) => (
                <>
                  <div>
                    <OptionTitle>{t('carState')}</OptionTitle>
                    {meta.valid && input.value && <CheckSuccessIcon />}
                  </div>

                  <InputSelect
                    {...input}
                    options={carStateOptions}
                    placeholder={t('selectCarState')}
                  />
                </>
              )}
            />
          </FormItemContainer>
          <FormItemContainer>
            <Field
              name="painted"
              render={({ input, meta }) => (
                <>
                  <div>
                    <OptionTitle>{t('painted')}</OptionTitle>
                    {meta.valid && input.value && <CheckSuccessIcon />}
                  </div>
                  <InputSelect {...input} options={paintedOptions} />
                </>
              )}
            />
          </FormItemContainer>
          <FormItemContainer>
            <Field
              name="color"
              render={({ input, meta }) => (
                <>
                  <div>
                    <OptionTitle>{t('color')}</OptionTitle>
                    {meta.valid && input.value && <CheckSuccessIcon />}
                  </div>

                  <InputSelect {...input} options={colorOptions} />
                </>
              )}
            />
          </FormItemContainer>
          <FormItemContainer>
            <OptionTitle>
              <Trans>{t('accidents')}</Trans>
            </OptionTitle>
            <Field
              name="accidents"
              type="checkbox"
              render={({ input }) => <SwitchButton {...input} />}
            />
          </FormItemContainer>
        </section>
      </div>
      <div>
        <section>
          <SecondTitle>
            {t('step') + ' 6. ' + t('createCar.additionOptions')}
          </SecondTitle>
          <FormItemContainer>
            <OptionTitle>{t('deliveredFrom')}</OptionTitle>
            <Field
              name="deliveredFrom"
              render={({ input, meta }) => (
                <InputSelect {...input} options={countryOptions} />
              )}
            />
          </FormItemContainer>
          <FormItemContainer>
            <OptionTitle>{`${t('fuelConsumption')}, ${t(
              'liter',
            )}`}</OptionTitle>
            <SetInputsGridContainer cols={3}>
              <Field
                name="fuel_consumption_city"
                render={({ input }) => (
                  <InputText
                    type="number"
                    {...input}
                    labelText={t('fuelConsumptionUnitsOptions.city')}
                    placeholder="0"
                  />
                )}
              />
              <Field
                name="fuel_consumption_average"
                render={({ input }) => (
                  <InputText
                    type="number"
                    {...input}
                    labelText={t('fuelConsumptionUnitsOptions.average')}
                    placeholder="0"
                  />
                )}
              />
              <Field
                name="fuel_consumption_road"
                render={({ input }) => (
                  <InputText
                    type="number"
                    {...input}
                    labelText={t('fuelConsumptionUnitsOptions.road')}
                    placeholder="0"
                  />
                )}
              />
            </SetInputsGridContainer>
          </FormItemContainer>
          <FormItemContainer>
            <OptionTitle>{`${t('engineVolume')}, ${t('liter')}`}</OptionTitle>
            <Field
              name="engine_volume"
              render={({ input, meta }) => (
                <div>
                  <InputText type="number" {...input} placeholder="0" />
                  {meta.error && meta.touched && (
                    <div>
                      <ErrorText>{meta.error}</ErrorText>
                    </div>
                  )}
                </div>
              )}
            />
          </FormItemContainer>
          <FormItemContainer>
            <OptionTitle>{`${t('horsepower')}, ${t(
              'horsepowerUnits',
            )}`}</OptionTitle>
            <Field
              name="power"
              render={({ input, meta }) => (
                <div>
                  <InputTextWithUnits
                    type="number"
                    {...input}
                    options={powerOptions}
                    placeholder="0"
                  />
                  {meta.error && meta.touched && (
                    <div>
                      <ErrorText>{meta.error}</ErrorText>
                    </div>
                  )}
                </div>
              )}
            />
          </FormItemContainer>

          <FormItemContainer>
            <OptionTitle>{t('doorCount')}</OptionTitle>
            <Field
              name="doorCount"
              render={({ input }) => (
                <InputSelect {...input} options={doorsOptions} />
              )}
            />
          </FormItemContainer>

          {!showSecurity && (
            <div>
              <AddNew
                onClick={() => {
                  showSecurityFields(true)
                }}
                name={t('security')}
              />
            </div>
          )}

          {showSecurity && (
            <div>
              <OptionTitle style={{ marginBottom: '12px', marginTop: '10px' }}>
                {t('security')}
              </OptionTitle>
              {securityOptions.map((item, idx) => (
                <Field
                  key={`security${item.value}${idx}`}
                  name="security"
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
              ))}
            </div>
          )}
          {!showComfort && (
            <div>
              <AddNew
                onClick={() => {
                  showComfortFields(true)
                }}
                name={t('comfort')}
              />
            </div>
          )}
          {showComfort && (
            <div>
              <OptionTitle style={{ marginBottom: '12px', marginTop: '10px' }}>
                {t('comfort')}
              </OptionTitle>
              {comfortOptions.map((item, idx) => (
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
              ))}
            </div>
          )}
          {!showMultimedia && (
            <div>
              <AddNew
                onClick={() => {
                  showMultimediaFields(true)
                }}
                name={t('multimedia')}
              />
            </div>
          )}

          {showMultimedia && (
            <div>
              <OptionTitle style={{ marginBottom: '12px', marginTop: '10px' }}>
                {t('multimedia')}
              </OptionTitle>
              {multimediaOptions.map((item, idx) => (
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
              ))}
            </div>
          )}

          <NextStepContainer>
            <BackTextButton onClick={setPrevStep}>{t('back')}</BackTextButton>
            <MainButton
              color="blue"
              onClick={setNextStep}
              isDisabled={isNextButtonDisabled}
            >
              {t('nextStep')}
            </MainButton>
          </NextStepContainer>
        </section>
      </div>
    </FieldsContainer>
  )
}

export default BaseInformation
