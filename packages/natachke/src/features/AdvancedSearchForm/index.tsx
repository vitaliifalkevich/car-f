import React, { useCallback, useMemo } from 'react'
import { Form as FormValidation, Field } from 'react-final-form'
import ComponentThemeProvider from 'styles/theme/ComponentThemeProvider'
import themes from './themes'
import {
  formValidator,
  prepareObjectForQueries,
  convertBrandsAndModelsToArray,
  generateYears,
  queryToRangeWithUnits,
} from 'utils'
import {
  ButtonGroupsWrapper,
  FormItemContainer,
  OptionTitle,
  Form,
  InputRangeTextWithUnitsContainer,
  SearchFiltersContainer,
  ClearAllFiltersContainer,
  ButtonsContainer,
  ButtonsWrapper,
} from './styled'
import {
  ButtonsGroup,
  InputRangeText,
  InputSelect,
  SwitchButton,
  InputRangeTextWithUnits,
} from 'ui/Inputs'
import { ClearAllFilters } from 'ui/SearchElements'
import HorizontalLine from 'ui/HorizontalLine'
import YearOfIssue from '../FormElements/YearOfIssue'
import PriceRange from '../FormElements/PriceRange'
import location from 'assets/icons/filters/location.svg'
import MileageRange from '../FormElements/MileageRange'
import {
  SecurityOptions,
  ComfortOptions,
  MultimediaOptions,
} from './AdditionalOptions'
import { DriveOptions, FuelOptions, TransmissionOptions } from './TechOptions'
import * as yup from 'yup'
import {
  useCountryOptions,
  useGenerateBodyTypeOptions,
  useRegionOptions,
  useGenerateCarStateOption,
  useGeneratePaintedOption,
  useColorOptions,
  useFuelConsumptionUnitsOptions,
  usePowerUnitsOptions,
  useDoorsOptions,
  useNavigateSearch,
  useGenerateBrandOptions,
  useGenerateSaleTypeOptions,
} from 'hooks'
import { useTranslation, Trans } from 'react-i18next'
import config from 'config'
import SearchFilters from '../SearchFilters'
import MainButton from 'ui/MainButton'
import search from 'assets/icons/search.svg'
import { useBreakpoint } from 'MediaQueriesProvider'
import { useDispatch, useSelector } from 'react-redux'
import { getCarOptionsData } from 'entities/Car/selectors'
import { BrandModelForm } from './BrandModel'
import { prepareQueries, getQueriesAsObject } from '../../routes'
import { Top50, TrueCar } from '../../ui/Badges'
import { useHistory } from 'react-router-dom'
import { actions } from 'entities/Car/slice'

const { currency } = config

const AdvancedSearchForm: React.FC = () => {
  const { t } = useTranslation()
  const dispatch = useDispatch()
  const breakpoints = useBreakpoint()

  const carOptionsData = useSelector(getCarOptionsData)
  const navigateToSearch = useNavigateSearch()
  const history = useHistory()

  const backButtonHandler = useCallback(() => {
    history.goBack()
  }, [history])

  const schema = useMemo(() => {
    return yup.object().shape({})
  }, [])

  const saleTypeOptions = useGenerateSaleTypeOptions()
  const bodyTypeOptions = useGenerateBodyTypeOptions(carOptionsData?.bodyTypes)
  const countryOptions = useCountryOptions()
  const regionOptions = useRegionOptions()

  const carStateOptions = useGenerateCarStateOption(carOptionsData?.states)
  const paintedOptions = useGeneratePaintedOption(carOptionsData?.painted)
  const colorOptions = useColorOptions(carOptionsData?.colors)

  const fuelConsumptionUnitsOptions = useFuelConsumptionUnitsOptions()
  const powerOptions = usePowerUnitsOptions()
  const doorCountOptions = useDoorsOptions(carOptionsData?.doors)

  const brandOptions = useGenerateBrandOptions(carOptionsData?.brands)

  const getModelsForCurrentBrand = useCallback(
    (brand: string) => {
      dispatch(actions.startGettingModelsForBrands(brand))
    },
    [dispatch],
  )

  const queries = useMemo(() => getQueriesAsObject(), [])

  const initialModels = useMemo(() => {
    if (!queries?.model) return
    return queries?.model.split(',').map(item => ({ label: item, value: item }))
  }, [queries])

  const initialBrand = useMemo(() => {
    if (!queries?.brand) return
    let initialBrand
    brandOptions.forEach(item => {
      if (initialBrand) return
      const brand = item.options.find(item => item.value === queries.brand)
      if (brand) initialBrand = brand
    })

    if (initialBrand) {
      getModelsForCurrentBrand(initialBrand.value)
    }

    return initialBrand
  }, [brandOptions, getModelsForCurrentBrand, queries])

  const initialValues = useMemo(() => {
    const yearOptions = generateYears()
    const powerFromUrl = queryToRangeWithUnits(queries, 'power', powerOptions)
    const fuelConsumptionFromUrl = queryToRangeWithUnits(
      queries,
      'fuel_consumption',
      fuelConsumptionUnitsOptions,
    )

    return {
      sale_type: queries?.sale_type || saleTypeOptions[0]?.value,
      body_type:
        (queries?.body_type &&
          bodyTypeOptions.find(item => item.value === queries?.body_type)) ||
        bodyTypeOptions?.[0],
      brand: initialBrand,
      model: initialModels,
      price: { from: queries?.price_from, to: queries?.price_to },
      year: {
        from: yearOptions.find(
          item => item.value === Number(queries?.year_from),
        ),
        to: yearOptions.find(item => item.value === Number(queries?.year_to)),
      },
      region: regionOptions.find(item => item.value === queries?.region),
      mileage: { from: queries?.mileage_from, to: queries?.mileage_to },
      custom_clearance: queries?.custom_clearance !== 'false',
      accidents: !!(queries?.accidents && queries?.accidents !== 'false'),
      true_car: !!(queries?.true_car && queries?.true_car !== 'false'),
      top_catalog: !!(queries?.top_catalog && queries?.top_catalog !== 'false'),
      state: carStateOptions.find(item => item.value === queries?.state),
      painted: paintedOptions.find(item => item.value === queries?.painted),
      delivered_from: countryOptions.find(
        item => item.value === queries?.delivered_from,
      ),
      fuel: queries?.fuel !== '' ? queries?.fuel?.split(',') : undefined,
      drive: queries?.drive !== '' ? queries?.drive?.split(',') : undefined,
      transmission:
        queries?.transmission !== ''
          ? queries?.transmission?.split(',')
          : undefined,
      comfort:
        queries?.comfort !== '' ? queries?.comfort?.split(',') : undefined,
      security:
        queries?.security !== '' ? queries?.security?.split(',') : undefined,
      multimedia: queries?.multimedia
        ? queries?.multimedia?.split(',')
        : undefined,
      engine_volume: {
        from: queries?.engine_volume_from,
        to: queries?.engine_volume_to,
      },
      door: doorCountOptions.find(item => item.value === queries?.door),
      color: colorOptions.find(item => item.value === queries?.color),

      fuel_consumption:
        fuelConsumptionFromUrl && Object.keys(fuelConsumptionFromUrl).length > 0
          ? fuelConsumptionFromUrl
          : { units: fuelConsumptionUnitsOptions[0] },
      power:
        powerFromUrl && Object.keys(powerFromUrl).length > 0
          ? powerFromUrl
          : {
              units: powerOptions[0],
            },
    }
  }, [
    bodyTypeOptions,
    carStateOptions,
    saleTypeOptions,
    colorOptions,
    countryOptions,
    doorCountOptions,
    fuelConsumptionUnitsOptions,
    initialBrand,
    initialModels,
    paintedOptions,
    powerOptions,
    queries,
    regionOptions,
  ])

  const onSubmitHandler = useCallback(
    values => {
      navigateToSearch(
        prepareQueries(
          convertBrandsAndModelsToArray(
            prepareObjectForQueries(values, 'useUnitsInRange'),
          ),
        ),
      )
    },
    [navigateToSearch],
  )

  const initialAfterReset = useMemo(
    () => ({
      sale_type: saleTypeOptions[0]?.value,
      fuel_consumption: { units: fuelConsumptionUnitsOptions[0] },
      power: {
        units: powerOptions[0],
      },
    }),
    [saleTypeOptions, fuelConsumptionUnitsOptions, powerOptions],
  )

  const optionsDividedIdx = useMemo(
    () => (breakpoints.mobile ? 1 : breakpoints.tablet ? 2 : 3),
    [breakpoints.mobile, breakpoints.tablet],
  )

  return (
    <ComponentThemeProvider themes={themes}>
      <div>
        <FormValidation
          onSubmit={onSubmitHandler}
          initialValues={initialValues}
          validate={formValidator(schema)}
          render={({ handleSubmit, form }) => (
            <Form onSubmit={handleSubmit}>
              <ButtonGroupsWrapper>
                <Field
                  name="sale_type"
                  render={({ input }) => (
                    <ButtonsGroup options={saleTypeOptions} {...input} />
                  )}
                />
              </ButtonGroupsWrapper>
              <FormItemContainer>
                <OptionTitle>{t('bodyType')}</OptionTitle>
                <Field
                  name="body_type"
                  render={({ input }) => (
                    <InputSelect {...input} options={bodyTypeOptions} />
                  )}
                />
              </FormItemContainer>
              <BrandModelForm modelsFromUrl={queries.model} />
              <FormItemContainer>
                <OptionTitle>{t('region')}</OptionTitle>
                <Field
                  name="region"
                  render={({ input }) => (
                    <InputSelect
                      {...input}
                      options={regionOptions}
                      fixedIcon={location}
                    />
                  )}
                />
              </FormItemContainer>
              <HorizontalLine />
              <FormItemContainer>
                <OptionTitle>
                  {t('priceRange')}, {currency.defaultCurrency.symbol}
                </OptionTitle>
                <PriceRange hideLabel={true} />
              </FormItemContainer>
              <FormItemContainer>
                <OptionTitle>{t('yearOfIssue')}</OptionTitle>
                <div>
                  <YearOfIssue showLabel={false} />
                </div>
              </FormItemContainer>
              <FormItemContainer>
                <OptionTitle>
                  {t('mileage')}, ({t('mileageUnits')})
                </OptionTitle>
                <MileageRange showLabel={false} />
              </FormItemContainer>
              <HorizontalLine />
              <FormItemContainer>
                <OptionTitle>
                  <Trans>{t('isCustomsCleared')}</Trans>
                </OptionTitle>
                <Field
                  name="custom_clearance"
                  type="checkbox"
                  render={({ input }) => <SwitchButton {...input} />}
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
              <FormItemContainer>
                <OptionTitle withIcon={true}>
                  <Trans>{t('onlyTrueCar')}</Trans>
                  {!breakpoints.mobile && (
                    <TrueCar size="sm" tooltip={t('trueCarTooltip')} />
                  )}
                </OptionTitle>

                <Field
                  name="true_car"
                  type="checkbox"
                  render={({ input }) => <SwitchButton {...input} />}
                />
              </FormItemContainer>

              <FormItemContainer>
                <OptionTitle withIcon={true}>
                  <Trans>{t('onlyTopCars')}</Trans>
                  {!breakpoints.mobile && (
                    <Top50 size="sm" tooltip={t('topCarTooltip')} />
                  )}
                </OptionTitle>

                <Field
                  name="top_catalog"
                  type="checkbox"
                  render={({ input }) => <SwitchButton {...input} />}
                />
              </FormItemContainer>

              <FormItemContainer>
                <OptionTitle>{t('carState')}</OptionTitle>
                <Field
                  name="state"
                  render={({ input }) => (
                    <InputSelect {...input} options={carStateOptions} />
                  )}
                />
              </FormItemContainer>
              <FormItemContainer>
                <OptionTitle>{t('painted')}</OptionTitle>
                <Field
                  name="painted"
                  render={({ input }) => (
                    <InputSelect {...input} options={paintedOptions} />
                  )}
                />
              </FormItemContainer>
              <FormItemContainer>
                <OptionTitle>{t('deliveredFrom')}</OptionTitle>
                <Field
                  name="delivered_from"
                  render={({ input }) => (
                    <InputSelect
                      {...input}
                      options={countryOptions}
                      fixedIcon={location}
                    />
                  )}
                />
              </FormItemContainer>
              <HorizontalLine />
              <FuelOptions />
              <TransmissionOptions />
              <DriveOptions />
              <InputRangeTextWithUnitsContainer>
                <OptionTitle>
                  {`${t('fuelConsumption')}, ${t('liter')}`}
                </OptionTitle>
                <InputRangeTextWithUnits
                  type="number"
                  fieldName="fuel_consumption"
                  options={fuelConsumptionUnitsOptions}
                />
              </InputRangeTextWithUnitsContainer>
              <FormItemContainer>
                <OptionTitle>
                  {`${t('engineVolume')}, ${t('liter')}`}
                </OptionTitle>

                <InputRangeText type="number" fieldName="engine_volume" />
              </FormItemContainer>
              <InputRangeTextWithUnitsContainer>
                <OptionTitle>{`${t('horsepower')}, ${t(
                  'horsepowerUnits',
                )}`}</OptionTitle>

                <InputRangeTextWithUnits
                  type="number"
                  options={powerOptions}
                  fieldName="power"
                />
              </InputRangeTextWithUnitsContainer>
              <FormItemContainer>
                <OptionTitle>{t('doorCount')}</OptionTitle>
                <Field
                  name="door"
                  render={({ input }) => (
                    <InputSelect {...input} options={doorCountOptions} />
                  )}
                />
              </FormItemContainer>
              <FormItemContainer>
                <OptionTitle>{t('color')}</OptionTitle>
                <Field
                  name="color"
                  render={({ input }) => (
                    <InputSelect {...input} options={colorOptions} />
                  )}
                />
              </FormItemContainer>
              <HorizontalLine />
              <SecurityOptions optionsDividedIdx={optionsDividedIdx} />
              <ComfortOptions optionsDividedIdx={optionsDividedIdx} />
              <MultimediaOptions optionsDividedIdx={optionsDividedIdx} />
              <HorizontalLine />
              <SearchFiltersContainer>
                <OptionTitle>{t('lookForNow')}</OptionTitle>
                <SearchFilters />
              </SearchFiltersContainer>
              <ButtonsWrapper>
                {!breakpoints.mobile && <div />}
                <ButtonsContainer>
                  <MainButton type="submit" icon={search} color="blue">
                    {t('search')}
                  </MainButton>
                  <MainButton
                    type="button"
                    color="grey"
                    onClick={backButtonHandler}
                  >
                    {t('back')}
                  </MainButton>
                </ButtonsContainer>
              </ButtonsWrapper>
              <ClearAllFiltersContainer>
                {!breakpoints.mobile && <div />}
                <ClearAllFilters
                  onClick={() => {
                    form.initialize(initialAfterReset)
                  }}
                />
              </ClearAllFiltersContainer>
            </Form>
          )}
        />
      </div>
    </ComponentThemeProvider>
  )
}

export default AdvancedSearchForm
