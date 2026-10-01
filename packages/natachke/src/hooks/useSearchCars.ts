import { useDispatch } from 'react-redux'
import { useCallback } from 'react'
import config, { GROUPS } from '../config'
import { actions as searchActions } from '../entities/Search/slice'
import { generateFromToSearchPower, generateFromToWithUnits } from '../utils'
const { currentCountryCode } = config

export const useSearchCars = () => {
  const dispatch = useDispatch()

  return useCallback(
    values => {
      const { sorting, page, results_per_page, ...filters } = values
      const preparedModels = filters?.model?.map(item => item.value)

      const options: string[] = []
      if (filters?.comfort) options.push(...filters?.comfort)
      if (filters?.security) options.push(...filters?.security)
      if (filters?.multimedia) options.push(...filters?.multimedia)

      const groups: string[] = []
      if (filters?.true_car) groups.push(GROUPS.TRUE_CAR)
      if (filters?.top_catalog) groups.push(GROUPS.TOP_CATALOG)

      dispatch(
        searchActions.startSearchCars({
          filters: {
            sale_type: filters?.sale_type,
            body_type: filters?.body_type?.value,
            brand: filters?.brand?.value,
            model:
              preparedModels && preparedModels.length > 0
                ? preparedModels
                : undefined,
            year_from: filters?.year?.from?.value
              ? String(filters?.year?.from?.value)
              : undefined,
            year_to: filters?.year?.to?.value
              ? String(filters?.year?.to?.value)
              : undefined,
            accidents: filters?.accidents,
            price_from: Number(filters?.price?.from) || undefined,
            price_to: Number(filters?.price?.to) || undefined,
            ...generateFromToWithUnits(
              filters?.fuel_consumption,
              'fuel_consumption',
              'number',
            ),
            ...generateFromToSearchPower(filters?.power, 'power'),
            state: filters?.state?.value,
            custom_clearance: filters?.custom_clearance,
            engine_volume_from: filters?.engine_volume?.from
              ? Number(filters?.engine_volume?.from)
              : undefined,
            engine_volume_to: filters?.engine_volume?.to
              ? Number(filters?.engine_volume?.to)
              : undefined,
            region: filters?.region?.value
              ? [filters?.region?.value]
              : undefined,
            color: filters?.color?.value ? [filters?.color?.value] : undefined,
            country: currentCountryCode,
            engine_type: filters?.fuel,
            drive: filters?.drive,
            transmission: filters?.transmission,
            door: filters?.door?.value ? [filters?.door?.value] : undefined,
            painted: filters?.painted?.value,
            mileage_from: filters?.mileage?.from
              ? Number(filters?.mileage?.from)
              : undefined,
            mileage_to: filters?.mileage?.to
              ? Number(filters?.mileage?.to)
              : undefined,
            come_from: filters?.delivered_from?.value,
            options: options.length > 0 ? options : undefined,
            groups: groups.length > 0 ? groups : undefined,
          },
          sort: sorting?.value,
          paginate: {
            start:
              (Number(page) > 0 ? Number(page) - 1 : 0) *
              Number(results_per_page),
            count: Number(results_per_page),
          },
          currentPage: page,
        }),
      )
    },
    [dispatch],
  )
}
