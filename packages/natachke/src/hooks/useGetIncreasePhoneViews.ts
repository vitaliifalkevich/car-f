import { CarViewCountPayloadViewTypeEnum } from '@handber/natachke-api-client'
import { useDispatch } from 'react-redux'
import { useCallback, useMemo } from 'react'
import { checkVisit, setVisit, setVisitorId } from '../utils'
import { getFingerPrintVisitor } from '../api'
import { actions } from '../entities/ViewsCount/slice'
import { useRecaptchaToken } from './useRecaptchaToken'

const viewType = CarViewCountPayloadViewTypeEnum.Phone

interface UseGetIncreasePhoneViews {
  carId?: number
  carUrl: string
}

export const useGetIncreasePhoneViews = (data: UseGetIncreasePhoneViews) => {
  const dispatch = useDispatch()
  const visitStorageData = useMemo(() => checkVisit(data.carUrl, viewType), [
    data.carUrl,
  ])

  const { recaptchaToken } = useRecaptchaToken('increasePhoneViews')

  return useCallback(async () => {
    let visitorId: string | null = null
    if (!visitStorageData.visitorId || !visitStorageData.wasVisit) {
      visitorId = await getFingerPrintVisitor()
      setVisitorId(visitorId)
    }

    if (visitStorageData.wasVisit) return
    if (visitorId && data.carId && recaptchaToken) {
      dispatch(
        actions.startIncreaseViewsCount({
          data: {
            carId: data.carId,
            viewType,
            visitorId: visitorId,
          },
          recaptchaToken,
        }),
      )
      setVisit(data.carUrl, viewType, visitorId)
    }
  }, [
    data.carId,
    data.carUrl,
    dispatch,
    recaptchaToken,
    visitStorageData.visitorId,
    visitStorageData.wasVisit,
  ])
}
