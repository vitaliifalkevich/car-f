import React, { useCallback, useMemo } from 'react'
import Modal from 'ui/Modal'
import { Container } from './styled'
import themes from './themes'
import { AnyObject, Field, Form as FormValidation } from 'react-final-form'
import {
  convertBrandsAndModelsToArray,
  generateYears,
  prepareObjectForQueries,
  queryToRangeWithUnits,
} from 'utils'
import {
  ButtonGroupsWrapper,
  ButtonsContainer,
  ButtonsWrapper,
  Form,
  FormItemContainer,
  OptionTitle,
  SearchFiltersContainer,
} from '../../AdvancedSearchForm/styled'
import {
  ButtonsGroup,
  InputRangeText,
  InputSelect,
  SwitchButton,
} from 'ui/Inputs'
import location from 'assets/icons/filters/location.svg'
import { BrandModelForm } from '../../AdvancedSearchForm/BrandModel'
import HorizontalLine from 'ui/HorizontalLine'
import PriceRange from 'features/FormElements/PriceRange'
import YearOfIssue from 'features/FormElements/YearOfIssue'
import MileageRange from 'features/FormElements/MileageRange'
import { Trans, useTranslation } from 'react-i18next'
import { Top50, TrueCar } from 'ui/Badges'
import {
  FuelOptions,
  TransmissionOptions,
} from '../../AdvancedSearchForm/TechOptions'
import SearchFilters from '../../SearchFilters'
import MainButton from 'ui/MainButton'
import search from 'assets/icons/search.svg'
import ComponentThemeProvider from 'styles/theme/ComponentThemeProvider'
import config, { DEFAULT_ACTIVE_PAGE, SHOW_PER_PAGE_DEFAULT } from 'config'
import { getQueriesAsObject, prepareQueries } from 'routes'
import {
  useColorOptions,
  useCountryOptions,
  useDoorsOptions,
  useFuelConsumptionUnitsOptions,
  useGenerateBodyTypeOptions,
  useGenerateBrandOptions,
  useGenerateCarStateOption,
  useGenerateSaleTypeOptions,
  useGeneratePaintedOption,
  useGenerateSortOptions,
  useNavigateSearch,
  usePowerUnitsOptions,
  useRegionOptions,
} from 'hooks'
import { useDispatch, useSelector } from 'react-redux'
import { getCarOptionsData } from 'entities/Car/selectors'
import { actions } from 'entities/Car/slice'
import { useBreakpoint } from 'MediaQueriesProvider'
const { currency } = config

interface MobileSearchProps {
  closeMobileSearch: () => void
  updateQueries: () => void
  handleSubmit: (
    event?: Partial<
      Pick<React.SyntheticEvent, 'preventDefault' | 'stopPropagation'>
    >,
  ) => Promise<AnyObject | undefined> | undefined
}

const MobileSearch: React.FC<MobileSearchProps> = ({
  closeMobileSearch,
  updateQueries,
  handleSubmit,
}) => {
  const { t } = useTranslation()
  const dispatch = useDispatch()
  const navigateToSearch = useNavigateSearch()
  const queries = useMemo(() => getQueriesAsObject(), [])
  const carOptionsData = useSelector(getCarOptionsData)

  const sortOptions = useGenerateSortOptions()
  const powerOptions = usePowerUnitsOptions()
  const doorCountOptions = useDoorsOptions(carOptionsData?.doors)
  const regionOptions = useRegionOptions()

  const getModelsForCurrentBrand = useCallback(
    (brand: string) => {
      dispatch(actions.startGettingModelsForBrands(brand))
    },
    [dispatch],
  )

  const carStateOptions = useGenerateCarStateOption(carOptionsData?.states)
  const paintedOptions = useGeneratePaintedOption(carOptionsData?.painted)
  const bodyTypeOptions = useGenerateBodyTypeOptions(carOptionsData?.bodyTypes)
  const brandOptions = useGenerateBrandOptions(carOptionsData?.brands)
  const saleTypeOptions = useGenerateSaleTypeOptions()

  const breakpoints = useBreakpoint()

  const initialPage = useMemo(() => {
    if (queries?.page)
      return Number(queries?.page) - 1 > 0 ? Number(queries?.page) - 1 : 0
    return 0
  }, [queries])

  const fuelConsumptionUnitsOptions = useFuelConsumptionUnitsOptions()
  const countryOptions = useCountryOptions()
  const colorOptions = useColorOptions(carOptionsData?.colors)

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

  const onSubmitHandler = useCallback(
    values => {
      navigateToSearch(
        prepareQueries(
          convertBrandsAndModelsToArray(
            prepareObjectForQueries(values, 'useUnitsInRange'),
          ),
        ),
      )
      closeMobileSearch()
      updateQueries()
      handleSubmit()
    },
    [closeMobileSearch, handleSubmit, navigateToSearch, updateQueries],
  )

  const initialValues = useMemo(() => {
    const yearOptions = generateYears()
    const powerFromUrl = queryToRangeWithUnits(queries, 'power', powerOptions)
    const sorting =
      (queries?.sorting &&
        sortOptions.find(option => option.value === queries?.sorting)) ||
      sortOptions[0]

    const fuelConsumptionFromUrl = queryToRangeWithUnits(
      queries,
      'fuel_consumption',
      fuelConsumptionUnitsOptions,
    )

    return {
      page: String(initialPage) || String(DEFAULT_ACTIVE_PAGE),
      results_per_page:
        queries?.results_per_page || String(SHOW_PER_PAGE_DEFAULT),
      sorting,
      sale_type: queries?.sale_type || saleTypeOptions[0]?.value,
      body_type:
        queries?.body_type &&
        bodyTypeOptions.find(item => item.value === queries?.body_type),
      brand: initialBrand,
      model: initialModels,
      year: {
        from: yearOptions.find(
          item => item.value === Number(queries?.year_from),
        ),
        to: yearOptions.find(item => item.value === Number(queries?.year_to)),
      },
      custom_clearance:
        queries?.custom_clearance && queries?.custom_clearance !== 'false',
      accidents: queries?.accidents && queries?.accidents !== 'false',
      true_car: queries?.true_car && queries?.true_car !== 'false',
      top_catalog: queries?.top_catalog && queries?.top_catalog !== 'false',
      state: carStateOptions.find(item => item.value === queries?.state),
      painted: paintedOptions.find(item => item.value === queries?.painted),
      delivered_from: countryOptions.find(
        item => item.value === queries?.delivered_from,
      ),
      price: { from: queries?.price_from, to: queries?.price_to },
      region: regionOptions.find(item => item.value === queries?.region),
      mileage: { from: queries?.mileage_from, to: queries?.mileage_to },
      transmission:
        queries?.transmission !== ''
          ? queries?.transmission?.split(',')
          : undefined,
      drive: queries?.drive !== '' ? queries?.drive?.split(',') : undefined,
      fuel: queries?.fuel !== '' ? queries?.fuel?.split(',') : undefined,
      engine_volume: {
        from: queries?.engine_volume_from,
        to: queries?.engine_volume_to,
      },
      comfort:
        queries?.comfort !== '' ? queries?.comfort?.split(',') : undefined,
      security:
        queries?.security !== '' ? queries?.security?.split(',') : undefined,
      multimedia: queries?.multimedia
        ? queries?.multimedia?.split(',')
        : undefined,
      door: doorCountOptions.find(item => item.value === queries?.door),
      color: colorOptions.find(item => item.value === queries?.color),
      url: queries?.url,

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
    initialPage,
    paintedOptions,
    powerOptions,
    queries,
    regionOptions,
    sortOptions,
  ])

  return (
    <Modal fullScreen={true} onClose={closeMobileSearch}>
      <Container>
        <ComponentThemeProvider themes={themes}>
          <div>
            <FormValidation
              onSubmit={onSubmitHandler}
              initialValues={initialValues}
              render={({ handleSubmit }) => (
                <Form onSubmit={handleSubmit}>
                  <ButtonGroupsWrapper className="buttons-group">
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
                  <HorizontalLine />
                  <FormItemContainer>
                    <OptionTitle>{t('yearOfIssue')}</OptionTitle>
                    <div>
                      <YearOfIssue showLabel={false} />
                    </div>
                  </FormItemContainer>
                  <FormItemContainer>
                    <OptionTitle>
                      {t('priceRange')}, {currency.defaultCurrency.symbol}
                    </OptionTitle>
                    <PriceRange hideLabel={true} />
                  </FormItemContainer>

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
                  <FormItemContainer>
                    <OptionTitle>
                      {t('mileage')}, ({t('mileageUnits')})
                    </OptionTitle>
                    <MileageRange showLabel={false} />
                  </FormItemContainer>
                  <HorizontalLine />
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
                  <HorizontalLine />
                  <FuelOptions />
                  <TransmissionOptions />
                  <FormItemContainer>
                    <OptionTitle>
                      {`${t('engineVolume')}, ${t('liter')}`}
                    </OptionTitle>

                    <InputRangeText type="number" fieldName="engine_volume" />
                  </FormItemContainer>
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
                        onClick={() => {
                          closeMobileSearch()
                        }}
                      >
                        {t('back')}
                      </MainButton>
                    </ButtonsContainer>
                  </ButtonsWrapper>
                </Form>
              )}
            />
          </div>
        </ComponentThemeProvider>
      </Container>
    </Modal>
  )
}

export default MobileSearch
