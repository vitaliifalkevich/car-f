import {
  CarViewCountPayloadViewTypeEnum,
  CarViewsHistory,
} from '@handber/natachke-api-client'
import { startOfDay } from 'date-fns'
import { generateSetOfPrevDatesInverse } from 'utils'

export const normalizeViewsHistory = (history: CarViewsHistory[]) => {
  const sortedByDateAndCategoryHistory = history.reduce((acc, item) => {
    if (!item || !item?.created_at || !item?.type_view || !item?.count)
      return acc
    const day = startOfDay(new Date(item.created_at)).getTime()
    if (acc[day]) {
      return {
        ...acc,
        [day]: { ...acc[day], [item.type_view]: item.count },
      }
    }
    return {
      ...acc,
      [day]: {
        [item.type_view]: item.count,
      },
    }
  }, {})

  const last14DaysWithData = generateSetOfPrevDatesInverse(14).reduce(
    (acc, item) => {
      const day = startOfDay(item).getTime()
      if (sortedByDateAndCategoryHistory[day])
        return {
          ...acc,
          [day]: sortedByDateAndCategoryHistory[day],
        }
      return {
        ...acc,
        [day]: {
          [CarViewCountPayloadViewTypeEnum.Car]: 0,
          [CarViewCountPayloadViewTypeEnum.Phone]: 0,
        },
      }
    },
    {},
  )
  return Object.keys(last14DaysWithData).reduce(
    (acc, key) => {
      const item = sortedByDateAndCategoryHistory?.[key]

      return {
        [CarViewCountPayloadViewTypeEnum.Car]: [
          ...acc[CarViewCountPayloadViewTypeEnum.Car],
          {
            count: item?.[CarViewCountPayloadViewTypeEnum.Car] || 0,
            date: key,
          },
        ],
        [CarViewCountPayloadViewTypeEnum.Phone]: [
          ...acc[CarViewCountPayloadViewTypeEnum.Phone],
          {
            count: item?.[CarViewCountPayloadViewTypeEnum.Phone] || 0,
            date: key,
          },
        ],
      }
    },
    {
      [CarViewCountPayloadViewTypeEnum.Car]: [] as any,
      [CarViewCountPayloadViewTypeEnum.Phone]: [] as any,
    },
  )
}
