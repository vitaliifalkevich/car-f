import React, { useCallback, useMemo } from 'react'
import { Form } from 'react-final-form'
import SearchFilters from 'features/SearchFilters'
import Sorting from 'features/Sorting'
import { MainContainer, TwoColumnsContainer } from '../ui/Containers'
import SearchContent from 'features/SearchContent'
import LeftBarSearch from '../features/LeftBarSearch'
import SearchResults from 'features/SearchResults'
import { useBreakpoint } from '../MediaQueriesProvider'
import {
  convertBrandsAndModelsToArray,
  formValidator,
  generateYears,
  prepareObjectForQueries,
  queryToRangeWithUnits,
} from '../utils'
import * as yup from 'yup'
import {
  useColorOptions,
  useCountryOptions,
  useDoorsOptions,
  useFuelConsumptionUnitsOptions,
  useGenerateBodyTypeOptions,
  useGenerateBrandOptions,
  useGenerateCarStateOption,
  useGeneratePaintedOption,
  useGenerateSaleTypeOptions,
  useGenerateSortOptions,
  useNavigateSearch,
  usePowerUnitsOptions,
  useRegionOptions,
  useSearchCars,
} from '../hooks'
import { useDispatch, useSelector } from 'react-redux'
import { getCarOptionsData } from '../entities/Car/selectors'
import { getQueriesAsObject, prepareQueries } from '../routes'
import { actions } from '../entities/Car/slice'
import TitleInSearch from '../features/TitleInSearch'
import { DEFAULT_ACTIVE_PAGE, SHOW_PER_PAGE_DEFAULT } from '../config'

const Search: React.FC = () => {
  const dispatch = useDispatch()

  const queries = useMemo(() => getQueriesAsObject(), [])
  const navigateToSearch = useNavigateSearch()
  const sortOptions = useGenerateSortOptions()
  const countryOptions = useCountryOptions()
  const searchCars = useSearchCars()

  const carOptionsData = useSelector(getCarOptionsData)
  const saleTypeOptions = useGenerateSaleTypeOptions()
  const regionOptions = useRegionOptions()
  const bodyTypeOptions = useGenerateBodyTypeOptions(carOptionsData?.bodyTypes)
  const brandOptions = useGenerateBrandOptions(carOptionsData?.brands)
  const carStateOptions = useGenerateCarStateOption(carOptionsData?.states)
  const paintedOptions = useGeneratePaintedOption(carOptionsData?.painted)
  const colorOptions = useColorOptions(carOptionsData?.colors)
  const fuelConsumptionUnitsOptions = useFuelConsumptionUnitsOptions()
  const powerOptions = usePowerUnitsOptions()
  const doorCountOptions = useDoorsOptions(carOptionsData?.doors)

  const breakpoints = useBreakpoint()

  const onSubmitHandler = useCallback(
    values => {
      navigateToSearch(
        prepareQueries(
          convertBrandsAndModelsToArray(
            prepareObjectForQueries(values, 'useUnitsInRange'),
          ),
        ),
      )
      searchCars(values)
    },
    [navigateToSearch, searchCars],
  )

  const getModelsForCurrentBrand = useCallback(
    (brand: string) => {
      dispatch(actions.startGettingModelsForBrands(brand))
    },
    [dispatch],
  )

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

  const initialPage = useMemo(() => {
    if (queries?.page) return Number(queries?.page) || 1
    return 1
  }, [queries])

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
      results_per_page: String(SHOW_PER_PAGE_DEFAULT),
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
      custom_clearance: queries?.custom_clearance !== 'false',
      accidents: !!(queries?.accidents && queries?.accidents !== 'false'),
      true_car: !!(queries?.true_car && queries?.true_car !== 'false'),
      top_catalog: !!(queries?.top_catalog && queries?.top_catalog !== 'false'),
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
    doorCountOptions,
    paintedOptions,
    carStateOptions,
    colorOptions,
    bodyTypeOptions,
    saleTypeOptions,
    countryOptions,
    fuelConsumptionUnitsOptions,
    initialBrand,
    initialModels,
    initialPage,
    powerOptions,
    queries,
    regionOptions,
    sortOptions,
  ])

  const schema = useMemo(
    () =>
      yup.object({
        sale_type: yup.string(),
      }),
    [],
  )

  return (
    <main>
      <MainContainer>
        <Form
          onSubmit={onSubmitHandler}
          initialValues={initialValues}
          validate={formValidator(schema)}
          render={({ handleSubmit, values }) => (
            <form onSubmit={handleSubmit}>
              <SearchContent>
                <TitleInSearch />
                <SearchFilters
                  showAdvancedSearchButton={true}
                  showBorderBottom={true}
                  deleteAction={handleSubmit}
                />

                <Sorting values={values} handleSubmit={handleSubmit} />

                <TwoColumnsContainer>
                  {!breakpoints.mobile && (
                    <LeftBarSearch
                      values={values}
                      handleSubmit={handleSubmit}
                    />
                  )}
                  <section>
                    <SearchResults
                      values={values}
                      handleSubmit={handleSubmit}
                    />
                  </section>
                </TwoColumnsContainer>
              </SearchContent>
            </form>
          )}
        />
      </MainContainer>
    </main>
  )
}

export default Search
