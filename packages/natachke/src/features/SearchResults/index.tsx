import React, { useCallback, useMemo } from 'react'
import { CarCardList, CarCardListMobile, usePreloadedSlide } from 'ui/Cards'
import HorizontalLine from 'ui/HorizontalLine'
import Pagination from 'ui/Pagination'
import { useBreakpoint } from '../../MediaQueriesProvider'
import EmptyResults from 'ui/EmptyResults'
import { useTranslation } from 'react-i18next'
import { prepareQueries } from 'routes'
import {
  checkTopCarGroup,
  checkTopSearchCarGroup,
  checkTrueCarGroup,
  convertBrandsAndModelsToArray,
  prepareObjectForQueries,
} from 'utils'
import {
  useFuelConsumptionUnitsOptions,
  useGenerateSaleTypeOptions,
  useGenerateSortOptions,
  useNavigateSearch,
  usePowerUnitsOptions,
} from 'hooks'
import { AnyObject, Field, useForm } from 'react-final-form'
import { useSelector } from 'react-redux'
import {
  getSearchCars,
  getSearchCarsCount,
  getSearchError,
  getSearchLoading,
} from 'entities/Search/selectors'
import { DEFAULT_ACTIVE_PAGE, SHOW_PER_PAGE_DEFAULT } from 'config'

const SearchResults: React.FC<{
  values: any
  handleSubmit: (
    event?: Partial<
      Pick<React.SyntheticEvent, 'preventDefault' | 'stopPropagation'>
    >,
  ) => Promise<AnyObject | undefined> | undefined
}> = ({ values, handleSubmit }) => {
  const { t } = useTranslation()
  const preloadedSlide = usePreloadedSlide()
  const form = useForm()
  const saleTypeOptions = useGenerateSaleTypeOptions()
  const sortOptions = useGenerateSortOptions()
  const fuelConsumptionUnitsOptions = useFuelConsumptionUnitsOptions()
  const powerOptions = usePowerUnitsOptions()
  const searchData = useSelector(getSearchCars)
  const isSearchDataLoading = useSelector(getSearchLoading)
  const searchDataError = useSelector(getSearchError)
  const searchCount = useSelector(getSearchCarsCount)
  const navigateToSearch = useNavigateSearch()
  const breakpoints = useBreakpoint()
  const generateInSearchAd = useCallback((idx: number) => {
    return null
  }, [])

  const navigateInResults = useCallback(
    (data: { [fieldName: string]: number | string }) => {
      Object.keys(data).forEach(key => {
        form.change(key, data[key])
      })

      const preparedFormData = convertBrandsAndModelsToArray(
        prepareObjectForQueries(values, 'useUnitsInRange'),
      )

      navigateToSearch(prepareQueries({ ...preparedFormData, data }))
      handleSubmit(values)
    },
    [form, handleSubmit, navigateToSearch, values],
  )

  const handlePageClick = useCallback(
    e => {
      const page = String(e.nextSelectedPage + 1 || e.selected + 1)
      navigateInResults({ page })
    },
    [navigateInResults],
  )

  const initialAfterReset = useMemo(
    () => ({
      sale_type: saleTypeOptions[0]?.value,
      fuel_consumption: { units: fuelConsumptionUnitsOptions[0] },
      power: {
        units: powerOptions[0],
      },
      page: String(DEFAULT_ACTIVE_PAGE),
      results_per_page: String(SHOW_PER_PAGE_DEFAULT),
      sorting: sortOptions[0],
    }),
    [saleTypeOptions, fuelConsumptionUnitsOptions, powerOptions, sortOptions],
  )

  const resetFiltersHandler = useCallback(() => {
    form.initialize(initialAfterReset)

    const preparedFormData = convertBrandsAndModelsToArray(
      prepareObjectForQueries(values, 'useUnitsInRange'),
    )
    navigateToSearch(prepareQueries(preparedFormData))
    handleSubmit(values)
  }, [form, handleSubmit, initialAfterReset, navigateToSearch, values])

  const emptyResultsText = useMemo(() => {
    if (searchDataError)
      return (
        <>
          <div>{t('notFoundCars')}</div>
          {t('tryToChangeFilters')}
        </>
      )
    return <div>{t('notFoundCars')}</div>
  }, [searchDataError, t])

  return (
    <div>
      {searchData.length > 0 ? (
        searchData.map((car, idx) => (
          <React.Fragment key={`carSearch${car.id}${idx}`}>
            {breakpoints.mobile ? (
              <>
                <CarCardListMobile
                  {...car}
                  isTrueCar={checkTrueCarGroup(car?.groups)}
                  isTopCar={checkTopCarGroup(car?.groups)}
                  isTopSearchCar={checkTopSearchCarGroup(car?.groups)}
                />
                {idx < searchData.length - 1 ? <HorizontalLine /> : null}
              </>
            ) : (
              <CarCardList
                key={`carSearch${car.id}${idx}`}
                {...car}
                isTrueCar={checkTrueCarGroup(car?.groups)}
                isTopCar={checkTopCarGroup(car?.groups)}
                isTopSearchCar={checkTopSearchCarGroup(car?.groups)}
              />
            )}

            {generateInSearchAd(idx)}
          </React.Fragment>
        ))
      ) : isSearchDataLoading ? (
        preloadedSlide
      ) : (
        <EmptyResults
          action={resetFiltersHandler}
          actionText={t('resetFilters')}
          text={emptyResultsText}
        />
      )}

      {searchCount && searchCount > SHOW_PER_PAGE_DEFAULT ? (
        <>
          <HorizontalLine />
          <Field
            name="page"
            render={({ input }) => (
              <Pagination
                initialActivePage={Number(input.value - 1)}
                count={
                  values?.results_per_page && searchCount
                    ? Number(searchCount) / Number(values.results_per_page)
                    : 0
                }
                handlePageClick={handlePageClick}
              />
            )}
          />
        </>
      ) : null}
    </div>
  )
}

export default SearchResults
