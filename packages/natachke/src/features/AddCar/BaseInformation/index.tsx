import React, { useCallback, useMemo } from 'react'
import { SecondaryText, SecondTitle } from 'ui/Text'
import { Trans, useTranslation } from 'react-i18next'
import UploadImages from 'ui/UploadImages'
import AddVideo from './AddVideo'
import {
  ButtonGroupsWrapper,
  DeniedDescription,
  DescriptionContainer,
  FieldsContainer,
  PriceContainer,
} from './styled'
import HorizontalLine from 'ui/HorizontalLine'
import { Field, useForm, useFormState } from 'react-final-form'
import {
  ButtonsGroup,
  InputSelect,
  InputText,
  InputTextarea,
  OptionTitle,
  SwitchButton,
} from 'ui/Inputs'
import {
  useGenerateBodyTypeOptions,
  useGenerateBrandOptions,
  useGenerateSaleTypeOptions,
  useModelOptions,
  useRegionOptions,
} from 'hooks'
import MainButton from 'ui/MainButton'
import {
  CheckSuccessIcon,
  FormItemContainer,
  NextStepContainer,
} from '../styled'
import { generateYears } from 'utils'
import location from 'assets/icons/filters/location.svg'
import ErrorText from 'ui/ErrorText'
import config, { CREATE_CAR_TYPE } from 'config'
import { useBreakpoint } from 'MediaQueriesProvider'
import { useDispatch, useSelector } from 'react-redux'
import {
  getCarDefaultImage,
  getCarImages,
  getCarOptionsData,
  getEditCarData,
} from 'entities/Car/selectors'
import { actions } from 'entities/Car/slice'
import { useGoogleReCaptcha } from 'react-google-recaptcha-v3'

const { currency, minImagesToBeUploaded, maxImagesToBeUploaded } = config

const BaseInformation: React.FC<{
  setNextStep: () => void
  type: CREATE_CAR_TYPE
}> = ({ setNextStep, type }) => {
  const { t } = useTranslation()
  const breakpoints = useBreakpoint()
  const dispatch = useDispatch()
  const files = useSelector(getCarImages)
  const defaultImage = useSelector(getCarDefaultImage)
  const editMyCarData = useSelector(getEditCarData)

  const formState = useFormState()
  const form = useForm()
  const carOptionsData = useSelector(getCarOptionsData)
  const isNextButtonDisabled = useMemo(() => {
    if (
      !files ||
      files.length < minImagesToBeUploaded ||
      files.length > maxImagesToBeUploaded
    )
      return true
    if (!formState.touched) return true
    const errorsCount = Object.keys(formState.errors).length
    if (errorsCount === 0 && Object.keys(formState.touched).length === 0)
      return true
    if (errorsCount > 0) {
      const requiredFieldsThisStep = [
        'sale_type',
        'brand',
        'model',
        'yearOfIssue',
        'body_type',
        'region',
        'mileage',
        'description',
        'price',
        'isCustomsCleared',
      ]

      return !!requiredFieldsThisStep.find(item => formState.errors[item])
    }
  }, [files, formState.errors, formState.touched])

  const saleTypeOptions = useGenerateSaleTypeOptions({ withoutAll: true })
  const brandOptions = useGenerateBrandOptions(carOptionsData?.brands)
  const modelOptions = useModelOptions()
  const yearsOptions = useMemo(() => generateYears(), [])
  const bodyTypeOptions = useGenerateBodyTypeOptions(carOptionsData?.bodyTypes)
  const regionOptions = useRegionOptions()

  const setCurrentBrand = useCallback(
    (brand: string) => {
      dispatch(actions.startGettingModelsByBrand(brand))
    },
    [dispatch],
  )

  const setDefaultImageByName = useCallback(
    (name: string) => {
      dispatch(actions.changeDefaultCarImage(name))
    },
    [dispatch],
  )

  const removeImage = useCallback(
    (id: string) => {
      dispatch(
        actions.startRemoveCarPhotos({
          image: id,
          carId: type === CREATE_CAR_TYPE.EDIT ? editMyCarData?.id : undefined,
        }),
      )
    },
    [dispatch, editMyCarData, type],
  )
  const { executeRecaptcha } = useGoogleReCaptcha()

  const handleReCaptchaVerify = useCallback(async () => {
    if (!executeRecaptcha) return
    return await executeRecaptcha('uploadImages')
  }, [executeRecaptcha])

  const onDrop = useCallback(
    async acceptedFiles => {
      dispatch(
        actions.startAddingCarPhotos({
          files: acceptedFiles,
          getRecaptchaToken: handleReCaptchaVerify,
        }),
      )
    },
    [dispatch, handleReCaptchaVerify],
  )

  return (
    <div>
      <section>
        <SecondTitle>
          {t('step') + ' 1. ' + t('createCar.uploadImages')}
        </SecondTitle>
        <SecondaryText>
          <Trans>{t('createCar.uploadImagesDescription')}</Trans>
        </SecondaryText>
        <UploadImages
          onFileDrop={onDrop}
          files={files}
          defaultImage={defaultImage}
          setDefaultImage={setDefaultImageByName}
          removeImage={removeImage}
        />
        <FieldsContainer>
          <AddVideo />
        </FieldsContainer>
      </section>
      <HorizontalLine />
      <FieldsContainer>
        <section>
          <div>
            <SecondTitle>
              {t('step') + ' 2. ' + t('createCar.baseCharacteristics')}
            </SecondTitle>
            <SecondaryText>
              <Trans>{t('createCar.baseCharacteristicsDescription')}</Trans>
            </SecondaryText>
            <ButtonGroupsWrapper>
              <Field
                name="sale_type"
                render={({ input, meta }) => (
                  <>
                    {!breakpoints.mobile && meta.valid && input.value && (
                      <CheckSuccessIcon />
                    )}
                    <ButtonsGroup options={saleTypeOptions} {...input} />
                  </>
                )}
              />
            </ButtonGroupsWrapper>

            <FormItemContainer>
              <Field
                name="brand"
                render={({ input, meta }) => (
                  <>
                    <div>
                      <OptionTitle>{t('brand')}</OptionTitle>
                      {meta.valid && input.value && <CheckSuccessIcon />}
                    </div>

                    <InputSelect
                      {...input}
                      onChange={event => {
                        input.onChange(event)
                        if (event?.value) setCurrentBrand(event.value)
                        // reset models if model is changed
                        form.change('model', undefined)
                      }}
                      options={brandOptions}
                      placeholder={t('selectBrand')}
                    />
                  </>
                )}
              />
            </FormItemContainer>
            <FormItemContainer>
              <Field
                name="model"
                render={({ input, meta }) => (
                  <>
                    <div>
                      <OptionTitle>{t('model')}</OptionTitle>
                      {meta.valid && input.value && <CheckSuccessIcon />}
                    </div>
                    <InputSelect
                      {...input}
                      options={modelOptions}
                      noOptionsMessage={t('selectBrandFirst')}
                      placeholder={t('selectModel')}
                    />
                  </>
                )}
              />
            </FormItemContainer>
            <FormItemContainer>
              <Field
                name="yearOfIssue"
                render={({ input, meta }) => (
                  <>
                    <div>
                      <OptionTitle>{t('yearOfIssue')}</OptionTitle>
                      {meta.valid && input.value && <CheckSuccessIcon />}
                    </div>

                    <InputSelect
                      {...input}
                      options={yearsOptions}
                      placeholder={t('yearOfIssue')}
                    />
                  </>
                )}
              />
            </FormItemContainer>
            <FormItemContainer>
              <Field
                name="body_type"
                render={({ input, meta }) => (
                  <>
                    <div>
                      <OptionTitle>{t('bodyType')}</OptionTitle>
                      {meta.valid && input.value && <CheckSuccessIcon />}
                    </div>
                    <InputSelect {...input} options={bodyTypeOptions} />
                  </>
                )}
              />
            </FormItemContainer>
            <FormItemContainer>
              <Field
                name="region"
                render={({ input, meta }) => (
                  <>
                    <div>
                      <OptionTitle>{t('region')}</OptionTitle>
                      {meta.valid && input.value && <CheckSuccessIcon />}
                    </div>

                    <InputSelect
                      {...input}
                      options={regionOptions}
                      fixedIcon={location}
                    />
                  </>
                )}
              />
            </FormItemContainer>
            <FormItemContainer>
              <Field
                name="mileage"
                render={({ input, meta }) => (
                  <>
                    <div>
                      <OptionTitle>
                        {t('mileage')}, ({t('mileageUnits')})
                      </OptionTitle>
                      {meta.valid && input.value && <CheckSuccessIcon />}
                    </div>

                    <div>
                      <InputText
                        {...input}
                        type="number"
                        placeholder={t('mileageUnits')}
                      />
                      {meta.error && meta.touched && (
                        <div>
                          <ErrorText>{meta.error}</ErrorText>
                        </div>
                      )}
                    </div>
                  </>
                )}
              />
            </FormItemContainer>
          </div>
        </section>
        <section>
          <div>
            <SecondTitle>
              {t('step') + ' 3. ' + t('createCar.carDescription')}
            </SecondTitle>
            <SecondaryText>
              <Trans>{t('createCar.carAdditionalDescription')}</Trans>
            </SecondaryText>
            <DeniedDescription>
              {t('createCar.descriptionDenied')}
            </DeniedDescription>
            <DeniedDescription>
              {t('createCar.descriptionDenied2')}
            </DeniedDescription>
            <Field
              name="description"
              render={({ input, meta }) => (
                <DescriptionContainer>
                  {meta.valid && input.value && <CheckSuccessIcon />}
                  <InputTextarea
                    {...input}
                    placeholder={t('createCar.carDetailedDescription')}
                  />
                  {meta.error && meta.touched && (
                    <ErrorText>{meta.error}</ErrorText>
                  )}
                </DescriptionContainer>
              )}
            />
            <SecondTitle>
              {t('step') + ' 4. ' + t('createCar.price')}
            </SecondTitle>
            <SecondaryText>
              <Trans>{t('createCar.priceDescription')}</Trans>
            </SecondaryText>
            <FormItemContainer style={{ gridTemplateColumns: 'auto' }}>
              <PriceContainer>
                <Field
                  name="price"
                  render={({ input, meta }) => (
                    <>
                      <div>
                        <OptionTitle>
                          {t('price')}, {currency.defaultCurrency.symbol}
                        </OptionTitle>
                        {meta.valid && input.value && <CheckSuccessIcon />}
                      </div>

                      <InputText
                        {...input}
                        type="number"
                        placeholder={t('price')}
                      />
                      {meta.error && meta.touched && (
                        <div>
                          <ErrorText>{meta.error}</ErrorText>
                        </div>
                      )}
                    </>
                  )}
                />
              </PriceContainer>
            </FormItemContainer>
            <FormItemContainer>
              <OptionTitle>
                <Trans>{t('isCustomsCleared')}</Trans>
              </OptionTitle>
              <Field
                name="isCustomsCleared"
                type="checkbox"
                render={({ input }) => <SwitchButton {...input} />}
              />
            </FormItemContainer>
            <NextStepContainer>
              <MainButton
                color="blue"
                onClick={setNextStep}
                isDisabled={isNextButtonDisabled}
              >
                {t('nextStep')}
              </MainButton>
            </NextStepContainer>
          </div>
        </section>
      </FieldsContainer>
    </div>
  )
}

export default BaseInformation
