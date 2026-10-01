import config from 'config'
import { CarViewCountPayloadViewTypeEnum } from '@handber/natachke-api-client'
const { visitor } = config

type VisitorPage = {
  [URL: string]: {
    [CarViewCountPayloadViewTypeEnum.Car]: boolean
    [CarViewCountPayloadViewTypeEnum.Phone]: boolean
  }
}

type VisitorStorage = {
  id: string
  data: VisitorPage
}

type VisitorData = {
  wasVisit: boolean
  visitorId: string | null
}

const getStorageDataOrInit = (visitorId): VisitorStorage => {
  let storageData = localStorage.getItem(visitor)
  if (!storageData) {
    localStorage.setItem(visitor, JSON.stringify({ id: visitorId, data: {} }))
  }
  storageData = localStorage.getItem(visitor) || ''
  return JSON.parse(storageData)
}

export const checkVisit = (
  url: string,
  action: CarViewCountPayloadViewTypeEnum,
): VisitorData => {
  const storageData = localStorage.getItem(visitor)
  if (!storageData) return { wasVisit: false, visitorId: null }
  const visitsData: VisitorStorage = JSON.parse(storageData)

  return {
    wasVisit: !!visitsData?.data?.[url]?.[action],
    visitorId: visitsData.id,
  }
}

export const setVisit = (
  url: string,
  action: CarViewCountPayloadViewTypeEnum,
  visitorId: string,
) => {
  const visitsData = getStorageDataOrInit(visitorId)
  const existedUrlData = visitsData?.data?.[url]
  let value: VisitorPage
  if (existedUrlData)
    value = {
      [url]: {
        ...existedUrlData,
        [action]: true,
      },
    }
  else {
    value = {
      [url]: {
        [CarViewCountPayloadViewTypeEnum.Phone]:
          action === CarViewCountPayloadViewTypeEnum.Phone,
        [CarViewCountPayloadViewTypeEnum.Car]:
          action === CarViewCountPayloadViewTypeEnum.Car,
      },
    }
  }

  const preparedData = {
    ...visitsData,
    data: {
      ...visitsData.data,
      ...value,
    },
  }

  localStorage.setItem(visitor, JSON.stringify(preparedData))
}

export const setVisitorId = (visitorId: string) => {
  const storageData = localStorage.getItem(visitor)
  if (!storageData)
    localStorage.setItem(visitor, JSON.stringify({ id: visitorId, data: {} }))
  else {
    const prevData = JSON.parse(storageData)?.data || {}

    localStorage.setItem(
      visitor,
      JSON.stringify({ id: visitorId, data: { ...prevData } }),
    )
  }
}
