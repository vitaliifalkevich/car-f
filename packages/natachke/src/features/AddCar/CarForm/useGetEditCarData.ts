import { useMemo, useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getCarOptionsData, getEditCarData } from 'entities/Car/selectors'
import {
  IOption,
  useColorOptions,
  useCountryOptions,
  useDoorsOptions,
  useDriveOptions,
  useFuelOptions,
  useGenerateBodyTypeOptions,
  useGenerateCarStateOption,
  useGeneratePaintedOption,
  useOptions,
  usePowerUnitsOptions,
  useRegionOptions,
  useTransmissionOptions,
} from '../../../hooks'
import { actions } from 'entities/Car/slice'
import { CreateCarResponseCarSaleType } from '@handber/natachke-api-client'

interface PrepareFields {
  data: any
  value?: string
  label?: string
  options?: IOption[]
}

const useGetEditCarData = () => {
  const carOptionsData = useSelector(getCarOptionsData)
  const dispatch = useDispatch()
  const editMyCarData = useSelector(getEditCarData)
  const powerOptions = usePowerUnitsOptions()
  const carBodyOptions = useGenerateBodyTypeOptions(carOptionsData?.bodyTypes)
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
  const regionOptions = useRegionOptions()
  const securityOptions = useOptions(
    carOptionsData?.options,
    'security',
    'securityOptions',
  )
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

  const prepareInitialField = useCallback(
    ({ data, label, value, options }: PrepareFields) => {
      if (!data) return
      if (options) {
        return options.find(
          option => option.value === (value ? data?.[value] : data.value),
        )
      }
      return {
        value: value ? data?.[value] : data?.value,
        label: label ? data?.[label] : data?.lang_key,
      }
    },
    [],
  )

  const prepareOptions = useCallback(
    (options: IOption[], setOptions?: CreateCarResponseCarSaleType[]) => {
      const setOptionsObject = setOptions?.reduce((acc, item) => {
        return item?.value ? { ...acc, [item?.value]: true } : acc
      }, {})

      let preparedOptions: Array<string | number> = []
      options.forEach(item => {
        if (item.value && setOptionsObject?.[item.value])
          preparedOptions.push(item?.value)
      })
      return preparedOptions
    },
    [],
  )

  return useMemo(() => {
    const brand = prepareInitialField({
      data: editMyCarData?.brand,
      label: 'name',
    })
    const security = prepareOptions(securityOptions, editMyCarData?.options)
    const comfort = prepareOptions(comfortOptions, editMyCarData?.options)
    const multimedia = prepareOptions(multimediaOptions, editMyCarData?.options)

    if (brand) dispatch(actions.startGettingModelsByBrand(brand?.value))
    return {
      sale_type: editMyCarData?.sale_type?.value || undefined,
      description: editMyCarData?.description || undefined,
      security,
      comfort,
      multimedia,
      yearOfIssue:
        {
          value: editMyCarData?.year,
          label: editMyCarData?.year,
        } || undefined,
      accidents: editMyCarData?.accidents || undefined,
      price: editMyCarData?.price ? Number(editMyCarData?.price) : undefined,
      mileage: editMyCarData?.mileage || undefined,
      carState: prepareInitialField({
        data: editMyCarData?.state,
        options: carStateOptions,
      }),
      isCustomsCleared: editMyCarData?.custom_clearance ?? undefined,
      engine_volume: editMyCarData?.engine_volume
        ? Number(editMyCarData?.engine_volume)
        : undefined,
      fuel_consumption_city: editMyCarData?.fuel_consumption_city
        ? Number(editMyCarData?.fuel_consumption_city)
        : undefined,
      fuel_consumption_average: editMyCarData?.fuel_consumption_average
        ? Number(editMyCarData?.fuel_consumption_average)
        : undefined,
      fuel_consumption_road: editMyCarData?.fuel_consumption_road
        ? Number(editMyCarData?.fuel_consumption_road)
        : undefined,
      power: { value: editMyCarData?.power_kwt, units: powerOptions[1] },
      video: editMyCarData?.video_review || undefined,
      region: prepareInitialField({
        data: editMyCarData?.region,
        value: 'region_code',
        options: regionOptions,
      }),
      fuel: prepareInitialField({
        data: editMyCarData?.engine_type,
        options: fuelOptions,
      }),
      drive: prepareInitialField({
        data: editMyCarData?.drive,
        options: driveOptions,
      }),
      transmission: prepareInitialField({
        data: editMyCarData?.transmission,
        options: transmissionOptions,
      }),
      doorCount: prepareInitialField({
        data: editMyCarData?.door,
        options: doorsOptions,
      }),
      color: prepareInitialField({
        data: editMyCarData?.color,
        options: colorOptions,
      }),
      painted: prepareInitialField({
        data: editMyCarData?.painted,
        options: paintedOptions,
      }),
      deliveredFrom: prepareInitialField({
        data: editMyCarData?.come_from,
        options: countryOptions,
        value: 'country_code',
      }),
      brand,
      model: prepareInitialField({ data: editMyCarData?.model, label: 'name' }),
      body_type: prepareInitialField({
        data: editMyCarData?.body_type,
        options: carBodyOptions,
      }),
    }
  }, [
    carBodyOptions,
    carStateOptions,
    colorOptions,
    comfortOptions,
    countryOptions,
    dispatch,
    doorsOptions,
    driveOptions,
    editMyCarData,
    fuelOptions,
    multimediaOptions,
    paintedOptions,
    powerOptions,
    prepareInitialField,
    prepareOptions,
    regionOptions,
    securityOptions,
    transmissionOptions,
  ])
}

export default useGetEditCarData
