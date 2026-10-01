import { useEffect, useMemo, useState } from 'react'
import { getFingerPrintVisitor } from 'api'
import { checkVisit, setVisitorId, setVisit } from '../utils'
import { useDispatch } from 'react-redux'
import { actions } from 'entities/ViewsCount/slice'
import { CarViewCountPayloadViewTypeEnum } from '@handber/natachke-api-client'
import { useRecaptchaToken } from './useRecaptchaToken'

const viewType = CarViewCountPayloadViewTypeEnum.Car

interface UseIncreaseViewsCount {
  carId?: number
  carUrl: string
}

export const useIncreaseViewsCount = (data: UseIncreaseViewsCount) => {
  const dispatch = useDispatch()
  const [fingerData, setFingerData] = useState<string | null>(null)

  const { recaptchaToken } = useRecaptchaToken('increaseCarViews')

  const visitStorageData = useMemo(() => checkVisit(data.carUrl, viewType), [
    data.carUrl,
  ])

  useEffect(() => {
    if (!visitStorageData.wasVisit || !visitStorageData.visitorId) {
      getFingerPrintVisitor().then(data => {
        setFingerData(data)
        setVisitorId(data)
      })
    }
  }, [data.carUrl, visitStorageData.visitorId, visitStorageData.wasVisit])

  useEffect(() => {
    if (visitStorageData.wasVisit) return
    if (fingerData && data.carId && data.carUrl && recaptchaToken) {
      dispatch(
        actions.startIncreaseViewsCount({
          data: {
            carId: data.carId,
            viewType,
            visitorId: fingerData,
          },
          recaptchaToken,
        }),
      )
      setVisit(data.carUrl, viewType, fingerData)
    }
  }, [
    data.carId,
    data.carUrl,
    dispatch,
    fingerData,
    recaptchaToken,
    visitStorageData,
  ])
}
