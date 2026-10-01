import React, { useCallback, useMemo } from 'react'
import { Form } from 'react-final-form'
import { useGenerateUrlWithLang } from 'hooks'
import { formValidator } from 'utils'
import * as yup from 'yup'
import { useTranslation } from 'react-i18next'
import { actions } from 'entities/Car/slice'
import { useDispatch, useSelector } from 'react-redux'
import { getIsAuthorized, getLanguage } from 'entities/Bootstrap/selectors'
import {
  getCarDefaultImage,
  getCarImages,
  getCarOptionsData,
  getEditCarData,
} from 'entities/Car/selectors'
import config, { CREATE_CAR_TYPE } from 'config'
import { useHistory } from 'react-router-dom'
import { useGoogleReCaptcha } from 'react-google-recaptcha-v3'
import useGenerateCarDescription from '../../../hooks/useGenerateCarDescription'

const { currentCountryCode, car_type, currency, horsePowerToKwt } = config

const CarForm: React.FC<{ initialValues: any; type: CREATE_CAR_TYPE }> = ({
  children,
  initialValues,
  type,
}) => {
  const { t } = useTranslation()
  const editMyCarData = useSelector(getEditCarData)
  const isAuth = useSelector(getIsAuthorized)
  const dispatch = useDispatch()
  const initialData = useSelector(getCarOptionsData)
  const currentLanguage = useSelector(getLanguage)
  const images = useSelector(getCarImages)
  const defaultImage = useSelector(getCarDefaultImage)
  const history = useHistory()
  const generateUrlWithLang = useGenerateUrlWithLang()
  const { executeRecaptcha } = useGoogleReCaptcha()
  const generateCarDescription = useGenerateCarDescription()

  const handleReCaptchaVerify = useCallback(
    async (typeAction: CREATE_CAR_TYPE) => {
      if (!executeRecaptcha) return
      return await executeRecaptcha(
        typeAction === CREATE_CAR_TYPE.CREATE ? 'createCar' : 'editCar',
      )
    },
    [executeRecaptcha],
  )

  const navigateToPublish = useCallback(() => {
    history.push(generateUrlWithLang('/sell/success'))
  }, [generateUrlWithLang, history])

  const imagesKeys = useMemo(() => {
    const keys: string[] = []
    images.forEach(image => {
      if (image.image_key) keys.push(image.image_key)
    })
    return keys
  }, [images])

  const generateArrayWithOptionsIds = useCallback(
    (chosenOptions: number[]): number[] => {
      const preparedOptionIds: number[] = []
      if (initialData?.options) {
        const chosenOptionsObject = chosenOptions?.reduce((acc, item) => {
          return {
            ...acc,
            [item]: true,
          }
        }, {})
        initialData.options?.forEach(item => {
          if (item?.value && item.id && chosenOptionsObject?.[item?.value])
            preparedOptionIds.push(Number(item.id))
        })
      }
      return preparedOptionIds
    },
    [initialData],
  )

  const onSubmitHandler = useCallback(
    async values => {
      const recaptchaToken = await handleReCaptchaVerify(type)
      const securityChosenOptions = generateArrayWithOptionsIds(values.security)
      const comfortChosenOptions = generateArrayWithOptionsIds(values.comfort)
      const multimediaChosenOptions = generateArrayWithOptionsIds(
        values.multimedia,
      )
      const optionsIds = [
        ...securityChosenOptions,
        ...comfortChosenOptions,
        ...multimediaChosenOptions,
      ]

      const user =
        !isAuth && values.email
          ? {
              email: values.email,
              password: values.password,
              first_name: values.seller,
              locale: currentLanguage,
              country_code: currentCountryCode,
              phone_code: values.phone_code.value,
              phone_number: values.phone_number,
            }
          : undefined
      const car = {
        sale_type: values.sale_type,
        body_type: values.body_type?.value,
        car_type,
        images: imagesKeys,
        defaultImage,
        options: optionsIds,
        brand: values.brand?.value,
        model: values.model?.value,
        country: currentCountryCode,
        description:
          values.description ||
          generateCarDescription({
            brand: values.brand?.label,
            model: values?.model?.label,
            year: values.yearOfIssue?.value
              ? String(values.yearOfIssue?.value)
              : undefined,
            body: values.body_type?.value,
          }),
        year: values.yearOfIssue?.value
          ? String(values.yearOfIssue?.value)
          : undefined,
        vin: values.vin,
        region: values.region?.value,
        engine_volume: values.engine_volume
          ? Number(values.engine_volume)
          : undefined,
        engine_type: values.fuel?.value,
        drive: values.drive?.value,
        transmission: values.transmission?.value,
        door: values.doorCount?.value,
        color: values.color?.value,
        painted: values.painted?.value,
        accidents: values.accidents,
        price: values.price ? Number(values.price) : undefined,
        mileage: values.mileage ? Number(values.mileage) : undefined,
        currency: currency.defaultCurrency?.title,
        state: values.carState?.value,
        custom_clearance: values.isCustomsCleared,
        video_review: values.video,
        fuel_consumption_city: values.fuel_consumption_city
          ? Number(values.fuel_consumption_city)
          : undefined,
        fuel_consumption_average: values.fuel_consumption_average
          ? Number(values.fuel_consumption_average)
          : undefined,
        fuel_consumption_road: Number(values.fuel_consumption_road),
        power_kwt: values.power.value
          ? values.power?.units?.value === 'horsePower'
            ? Number(values.power?.value * horsePowerToKwt)
            : Number(values.power?.value)
          : undefined,
        come_from: values.deliveredFrom?.value,
      }
      if (type === CREATE_CAR_TYPE.EDIT)
        dispatch(
          actions.startEditCar({
            data: {
              car: {
                carId: editMyCarData?.id,
                ...car,
              },
            },
            successAction: navigateToPublish,
            recaptchaToken,
          }),
        )
      else
        dispatch(
          actions.startCreateCar({
            data: {
              user,
              car,
            },
            successAction: navigateToPublish,
            recaptchaToken,
          }),
        )
    },
    [
      currentLanguage,
      defaultImage,
      dispatch,
      editMyCarData,
      generateArrayWithOptionsIds,
      generateCarDescription,
      handleReCaptchaVerify,
      imagesKeys,
      isAuth,
      navigateToPublish,
      type,
    ],
  )

  const schema = useMemo(() => {
    return yup.object().shape({
      video: yup
        .string()
        .matches(
          /^(?:https?:\/\/)?(?:m\.|www\.)?(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=))((\w|-){11})(?:\S+)?$/,
          t('errors.invalidVideoLink'),
        ),
      vin: yup
        .string()
        .min(17, err => t(`errors.vinMinError`, { max: err.min }))
        .max(17, err => t(`errors.vinMaxError`, { max: err.max })),
      sale_type: yup.string().required(t('errors.carTypeIsRequired')),
      brand: yup.string().required(t('errors.fieldIsRequired')),
      phone_code: !isAuth
        ? yup.string().required(t('errors.fieldIsRequired'))
        : yup.string().nullable(),
      phone_number: !isAuth
        ? yup.string().required(t('errors.fieldIsRequired'))
        : yup.string().nullable(),
      model: yup.string().required(t('errors.fieldIsRequired')),
      yearOfIssue: yup.string().required(t('errors.fieldIsRequired')),
      fuel_consumption_city: yup
        .number()
        .max(100, err => t(`errors.fuelConsumptionLessThan`, { max: err.max })),
      fuel_consumption_average: yup
        .number()
        .max(100, err => t(`errors.fuelConsumptionLessThan`, { max: err.max })),
      fuel_consumption_road: yup
        .number()
        .max(100, err => t(`errors.fuelConsumptionLessThan`, { max: err.max })),
      engine_volume: yup
        .number()
        .max(100, err => t(`errors.lessThan`, { max: err.max })),
      body_type: yup.string().required(t('errors.fieldIsRequired')),
      mileage: yup
        .number()
        .required(t('errors.fieldIsRequired'))
        .max(999, err => t(`errors.mileageLessThan`, { max: err.max })),
      region: yup.string().required(t('errors.fieldIsRequired')),
      price: yup
        .number()
        .required(t('errors.fieldIsRequired'))
        .min(100, data => t('errors.minPriceError', { min: data.min })),
      // description: yup
      //   .string()
      //   .required(t('errors.descriptionRequired'))
      //   .min(500, data => t('errors.descriptionMinSymbols', { min: data.min }))
      //   .max(10000, data =>
      //     t('errors.descriptionMaxSymbols', { max: data.max }),
      //   ),
      fuel: yup.string().required(t('errors.fieldIsRequired')),
      transmission: yup.string().required(t('errors.fieldIsRequired')),
      drive: yup.string().required(t('errors.fieldIsRequired')),
      carState: yup.string().required(t('errors.fieldIsRequired')),
      painted: yup.string().required(t('errors.fieldIsRequired')),
      color: yup.string().required(t('errors.fieldIsRequired')),
      isCustomsCleared: yup.boolean().required(t('errors.fieldIsRequired')),
      email: !isAuth
        ? yup
            .string()
            .required(t('errors.emailIsRequired'))
            .email(t('errors.invalidEmail'))
        : yup.string().nullable(),
      password: !isAuth
        ? yup
            .string()
            .required(t('errors.passwordIsRequired'))
            .min(8, t('errors.passwordMin8Symbols'))
        : yup.string().nullable(),
      repeatPassword: !isAuth
        ? yup
            .string()
            .required(t('errors.passwordIsRequired'))
            .min(8, t('errors.passwordMin8Symbols'))
            .oneOf([yup.ref('password')], t('errors.passwordsShouldMatch'))
        : yup.string().nullable(),
      seller: !isAuth
        ? yup.string().required(t('errors.fieldIsRequired'))
        : yup.string().nullable(),
    })
  }, [isAuth, t])

  return (
    <Form
      initialValues={initialValues}
      onSubmit={onSubmitHandler}
      validate={formValidator(schema)}
      render={({ handleSubmit, values, submitting }) => {
        const childrenWithFormValues = React.Children.map(children, child => {
          if (React.isValidElement(child)) {
            return React.cloneElement(child, { formValues: values, submitting })
          }
          return child
        })
        return <form onSubmit={handleSubmit}>{childrenWithFormValues}</form>
      }}
    />
  )
}

export default CarForm
