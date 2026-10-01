import { useMemo } from 'react'
import {
  CarInitialOptionsResponseBodyTypes,
  CarInitialOptionsResponseBrands,
  CarInitialOptionsResponseOptions,
  SearchCarsPayloadSortEnum,
  TopSearchCarPayloadPeriodEnum,
} from '@handber/natachke-api-client'
import {
  useLocalCountries,
  useRegionsByCountryCode,
} from '@handber/countries-and-regions'
import { useTranslation } from 'react-i18next'
import * as bodyTypes from '../assets/icons/filters/bodyType/assets'
import * as colors from '../assets/icons/filters/colors/assets'
import { sort, ascend, prop } from 'ramda'
import { useSelector } from 'react-redux'
import { getLanguage } from '../entities/Bootstrap/selectors'
import config from '../config'
import {
  getModelsByBrand,
  getModelsByBrandName,
} from '../entities/Car/selectors'
const { countries: configCountries, currentCountryCode } = config

export interface IOption {
  label: string
  value: string | number
}

export interface IGroupedOption {
  label: string
  options: IOption[]
}

export const useGenerateSaleTypeOptions = ({
  withoutAll,
}: {
  withoutAll?: boolean
} = {}): IOption[] => {
  const { t } = useTranslation()
  return useMemo(() => {
    const defaultOptions = [
      {
        label: t('typeCarOptions.used'),
        value: 'used',
      },
      {
        label: t('typeCarOptions.new'),
        value: 'new',
      },
    ]
    if (withoutAll) return defaultOptions
    return [
      {
        label: t('typeCarOptions.all'),
        value: 'all',
      },
      ...defaultOptions,
    ]
  }, [t, withoutAll])
}

export const useGenerateBodyTypeOptions = (
  availableOptions?: CarInitialOptionsResponseBodyTypes[],
): IOption[] => {
  const { t } = useTranslation('translation', { useSuspense: false })

  return useMemo(() => {
    return (
      availableOptions?.map(option => ({
        value: option?.value || '',
        label: t(`bodyTypeOptions.${option?.value}`),
        icon: bodyTypes?.[option?.value || ''],
      })) || []
    )
  }, [availableOptions, t])
}

export const useRegionOptions = (): IOption[] => {
  const currentLanguage = useSelector(getLanguage)
  const regions = useRegionsByCountryCode({
    lang: currentLanguage,
    countryCode: currentCountryCode,
  })

  return useMemo(() => {
    if (!regions) return []
    const preparedOptions = Object.keys(regions).map(key => ({
      label: regions[key],
      value: key,
    }))
    return sort(ascend(prop('label')))(preparedOptions) as IOption[]
  }, [regions])
}

export const useCountryOptions = (): IOption[] => {
  const currentLanguage = useSelector(getLanguage)
  const countries = useLocalCountries({ lang: currentLanguage })

  return useMemo(() => {
    if (!countries) return []
    const preparedOptions = Object.keys(countries)
      .filter(countryCode => configCountries?.[countryCode]?.enabled)
      .map(key => ({
        label: countries[key],
        value: key,
      }))
    return sort(ascend(prop('label')))(preparedOptions) as IOption[]
  }, [countries])
}
export const useGenerateBrandOptions = (
  brands?: CarInitialOptionsResponseBrands[],
): IGroupedOption[] => {
  const { t } = useTranslation('translation', { useSuspense: false })

  return useMemo(() => {
    const popular: IOption[] = []
    const regular: IOption[] = []
    brands?.forEach(brand => {
      if (brand.is_popular)
        popular.push({
          value: brand.value || '',
          label: brand.name || '',
        })
      else
        regular.push({
          value: brand.value || '',
          label: brand.name || '',
        })
    })

    return [
      {
        label: t('popularCars'),
        options: [...popular],
      },
      {
        label: t('allCars'),
        options: [...regular],
      },
    ]
  }, [brands, t])
}

export const useModelOptions = (): IOption[] => {
  const models = useSelector(getModelsByBrand)

  return useMemo(() => {
    return models.map(model => ({
      label: model.name,
      value: model.value,
    }))
  }, [models])
}

export const useModelOptionsByBrandName = (brand: string | null): IOption[] => {
  const models = useSelector(getModelsByBrandName(brand))

  return useMemo(() => {
    return (
      models?.map(model => ({
        label: model.name,
        value: model.value,
      })) || []
    )
  }, [models])
}

export const useGenerateSortOptions = (): IOption[] => {
  const { t } = useTranslation()
  return useMemo(() => {
    return [
      {
        label: t('sortTypes.byLast'),
        value: SearchCarsPayloadSortEnum.AddingLast,
      },
      {
        label: t('sortTypes.byLowPrice'),
        value: SearchCarsPayloadSortEnum.PriceLow,
      },
      {
        label: t('sortTypes.byHighPrice'),
        value: SearchCarsPayloadSortEnum.PriceHigh,
      },
      {
        label: t('sortTypes.byPreviousYear'),
        value: SearchCarsPayloadSortEnum.YearLow,
      },
      {
        label: t('sortTypes.byLastYear'),
        value: SearchCarsPayloadSortEnum.YearHigh,
      },
      {
        label: t('sortTypes.byMileageLow'),
        value: SearchCarsPayloadSortEnum.MileageLow,
      },
      {
        label: t('sortTypes.byMileageHigh'),
        value: SearchCarsPayloadSortEnum.MileageHigh,
      },
      {
        label: t('sortTypes.byVinCode'),
        value: SearchCarsPayloadSortEnum.VinCode,
      },
    ]
  }, [t])
}

export const useGenerateCarStateOption = (
  stateOptions?: CarInitialOptionsResponseBodyTypes[],
): IOption[] => {
  const { t } = useTranslation()
  return useMemo(() => {
    return (
      stateOptions?.map(option => ({
        label: t(`carStateOptions.${option.value}`) || '',
        value: option.value || '',
      })) || []
    )
  }, [t, stateOptions])
}
export const useGeneratePaintedOption = (
  paintedOptions?: CarInitialOptionsResponseBodyTypes[],
): IOption[] => {
  const { t } = useTranslation()
  return useMemo(
    () =>
      paintedOptions?.map(option => ({
        label: t(`paintedOptions.${option.value}`) || '',
        value: option.value || '',
      })) || [],
    [paintedOptions, t],
  )
}

export const useDoorsOptions = (
  doorOptions?: CarInitialOptionsResponseBodyTypes[],
): IOption[] => {
  const { t } = useTranslation()
  return useMemo(
    () =>
      doorOptions?.map(option => ({
        label: t(`doorOptions.${option.value}`) || '',
        value: option.value || '',
      })) || [],
    [doorOptions, t],
  )
}

export const useFuelOptions = (
  fuelOptions?: CarInitialOptionsResponseBodyTypes[],
): IOption[] => {
  const { t } = useTranslation()
  return useMemo(() => {
    return (
      fuelOptions?.map(option => ({
        label: t(`fuelOptions.${option.value}`) || '',
        value: option.value || '',
      })) || []
    )
  }, [fuelOptions, t])
}

export const useTransmissionOptions = (
  transmissionOptions?: CarInitialOptionsResponseBodyTypes[],
): IOption[] => {
  const { t } = useTranslation()

  return useMemo(() => {
    return (
      transmissionOptions?.map(option => ({
        label: t(`transmissionOptions.${option.value}`) || '',
        value: option.value || '',
      })) || []
    )
  }, [transmissionOptions, t])
}

export const useDriveOptions = (
  driveOptions?: CarInitialOptionsResponseBodyTypes[],
): IOption[] => {
  const { t } = useTranslation()
  return useMemo(() => {
    return (
      driveOptions?.map(option => ({
        label: t(`driveOptions.${option.value}`) || '',
        value: option.value || '',
      })) || []
    )
  }, [driveOptions, t])
}

export const useColorOptions = (
  colorOptions?: CarInitialOptionsResponseBodyTypes[],
): IOption[] => {
  const { t } = useTranslation()
  return useMemo(() => {
    return (
      colorOptions?.map(option => ({
        label: t(`colorOptions.${option.value}`) || '',
        value: option.value || '',
        icon: option.value && colors[option.value],
      })) || []
    )
  }, [colorOptions, t])
}

export const useFuelConsumptionUnitsOptions = () => {
  const { t } = useTranslation()
  return useMemo(
    () => [
      {
        label: t('fuelConsumptionUnitsOptions.average'),
        value: 'average',
      },
      {
        label: t('fuelConsumptionUnitsOptions.city'),
        value: 'city',
      },
      {
        label: t('fuelConsumptionUnitsOptions.road'),
        value: 'road',
      },
    ],
    [t],
  )
}

export const usePowerUnitsOptions = () => {
  const { t } = useTranslation()
  return useMemo(
    () => [
      {
        label: t('powerUnitsOptions.horsePower'),
        value: 'horsePower',
      },
      {
        label: t('powerUnitsOptions.kwt'),
        value: 'kwt',
      },
    ],
    [t],
  )
}

export const useOptions = (
  options: CarInitialOptionsResponseOptions[] = [],
  category: string,
  localeOptions: string,
): IOption[] => {
  const { t } = useTranslation()
  return useMemo(() => {
    const filteredOptions: IOption[] = []
    options?.forEach(item => {
      if (item?.category?.value === category) {
        filteredOptions.push({
          label: t(`${localeOptions}.${item.value}`),
          value: item.value || '',
        })
      }
    })
    return filteredOptions
  }, [category, localeOptions, options, t])
}

export const useTopCatalogPlacementPeriod = () => {
  const { t } = useTranslation()
  return useMemo(
    () => [
      {
        label: t('placementPeriod.week'),
        value: TopSearchCarPayloadPeriodEnum.Week,
      },
      {
        label: t('placementPeriod.week4'),
        value: TopSearchCarPayloadPeriodEnum.Week4,
      },
      {
        label: t('placementPeriod.week6'),
        value: TopSearchCarPayloadPeriodEnum.Week6,
      },
      {
        label: t('placementPeriod.week12'),
        value: TopSearchCarPayloadPeriodEnum.Week12,
      },
    ],
    [t],
  )
}

export const useGeneratePhoneOptions = () => {
  return useMemo(
    () => [
      { label: '+1', value: '+1' },
      { label: '+7', value: '+7' },
      { label: '+20', value: '+20' },
      { label: '+30', value: '+30' },
      { label: '+39', value: '+39' },
      { label: '+43', value: '+43' },
      { label: '+46', value: '+46' },
      { label: '+47', value: '+47' },
      { label: '+48', value: '+48' },
      { label: '+49', value: '+49' },
      { label: '+51', value: '+51' },
      { label: '+52', value: '+52' },
      { label: '+53', value: '+53' },
      { label: '+54', value: '+54' },
      { label: '+55', value: '+55' },
      { label: '+56', value: '+56' },
      { label: '+57', value: '+57' },
      { label: '+58', value: '+58' },
      { label: '+60', value: '+60' },
      { label: '+61', value: '+61' },
      { label: '+62', value: '+62' },
      { label: '+63', value: '+63' },
      { label: '+64', value: '+64' },
      { label: '+66', value: '+66' },
      { label: '+81', value: '+81' },
      { label: '+82', value: '+82' },
      { label: '+84', value: '+84' },
      { label: '+90', value: '+90' },
      { label: '+91', value: '+91' },
      { label: '+92', value: '+92' },
      { label: '+93', value: '+93' },
      { label: '+94', value: '+94' },
      { label: '+95', value: '+95' },
      { label: '+212', value: '+212' },
      { label: '+216', value: '+216' },
      { label: '+218', value: '+218' },
      { label: '+220', value: '+220' },
      { label: '+221', value: '+221' },
      { label: '+222', value: '+222' },
      { label: '+223', value: '+223' },
      { label: '+224', value: '+224' },
      { label: '+225', value: '+225' },
      { label: '+226', value: '+226' },
      { label: '+227', value: '+227' },
      { label: '+228', value: '+228' },
      { label: '+229', value: '+229' },
      { label: '+230', value: '+230' },
      { label: '+232', value: '+232' },
      { label: '+234', value: '+234' },
      { label: '+235', value: '+235' },
      { label: '+236', value: '+236' },
      { label: '+237', value: '+237' },
      { label: '+238', value: '+238' },
      { label: '+239', value: '+239' },
      { label: '+240', value: '+240' },
      { label: '+241', value: '+241' },
      { label: '+242', value: '+242' },
      { label: '+243', value: '+243' },
      { label: '+244', value: '+244' },
      { label: '+245', value: '+245' },
      { label: '+247', value: '+247' },
      { label: '+249', value: '+249' },
      { label: '+250', value: '+250' },
      { label: '+251', value: '+251' },
      { label: '+252', value: '+252' },
      { label: '+253', value: '+253' },
      { label: '+254', value: '+254' },
      { label: '+256', value: '+256' },
      { label: '+257', value: '+257' },
      { label: '+258', value: '+258' },
      { label: '+260', value: '+260' },
      { label: '+261', value: '+261' },
      { label: '+263', value: '+263' },
      { label: '+264', value: '+264' },
      { label: '+265', value: '+265' },
      { label: '+266', value: '+266' },
      { label: '+267', value: '+267' },
      { label: '+291', value: '+291' },
      { label: '+298', value: '+298' },
      { label: '+299', value: '+299' },
      { label: '+352', value: '+352' },
      { label: '+353', value: '+353' },
      { label: '+355', value: '+355' },
      { label: '+357', value: '+357' },
      { label: '+358', value: '+358' },
      { label: '+370', value: '+370' },
      { label: '+373', value: '+373' },
      { label: '+374', value: '+374' },
      { label: '+376', value: '+376' },
      { label: '+377', value: '+377' },
      { label: '+378', value: '+378' },
      { label: '+379', value: '+379' },
      { label: '+38', value: '+38' },
      { label: '+381', value: '+381' },
      { label: '+386', value: '+386' },
      { label: '+387', value: '+387' },
      { label: '+389', value: '+389' },
      { label: '+420', value: '+420' },
      { label: '+421', value: '+421' },
      { label: '+502', value: '+502' },
      { label: '+503', value: '+503' },
      { label: '+504', value: '+504' },
      { label: '+505', value: '+505' },
      { label: '+509', value: '+509' },
      { label: '+590', value: '+590' },
      { label: '+591', value: '+591' },
      { label: '+592', value: '+592' },
      { label: '+593', value: '+593' },
      { label: '+595', value: '+595' },
      { label: '+597', value: '+597' },
      { label: '+598', value: '+598' },
      { label: '+670', value: '+670' },
      { label: '+672', value: '+672' },
      { label: '+673', value: '+673' },
      { label: '+674', value: '+674' },
      { label: '+676', value: '+676' },
      { label: '+679', value: '+679' },
      { label: '+680', value: '+680' },
      { label: '+683', value: '+683' },
      { label: '+685', value: '+685' },
      { label: '+686', value: '+686' },
      { label: '+690', value: '+690' },
      { label: '+690', value: '+690' },
      { label: '+691', value: '+691' },
      { label: '+692', value: '+692' },
      { label: '+850', value: '+850' },
      { label: '+852', value: '+852' },
      { label: '+853', value: '+853' },
      { label: '+855', value: '+855' },
      { label: '+856', value: '+856' },
      { label: '+960', value: '+960' },
      { label: '+961', value: '+961' },
      { label: '+962', value: '+962' },
      { label: '+965', value: '+965' },
      { label: '+966', value: '+966' },
      { label: '+967', value: '+967' },
      { label: '+968', value: '+968' },
      { label: '+971', value: '+971' },
      { label: '+972', value: '+972' },
      { label: '+973', value: '+973' },
      { label: '+974', value: '+974' },
      { label: '+975', value: '+975' },
      { label: '+976', value: '+976' },
      { label: '+977', value: '+977' },
      { label: '+992', value: '+992' },
      { label: '+993', value: '+993' },
      { label: '+994', value: '+994' },
      { label: '+996', value: '+996' },
      { label: '+998', value: '+998' },
      { label: '+1649', value: '+1649' },
    ],
    [],
  )
}

export const useMessagesStatusOptions = () => {
  const { t } = useTranslation()
  return useMemo(
    () => [
      { label: t('messages.all'), value: 'all' },
      { label: t('messages.read'), value: 'read' },
      { label: t('messages.unread'), value: 'unread' },
    ],
    [t],
  )
}
