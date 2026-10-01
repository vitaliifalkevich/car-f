import { setVisit } from '../index'
import { CarViewCountPayloadViewTypeEnum } from '@handber/natachke-api-client'

const mockedSetVisit = jest.fn(setVisit)

const mockedStore = {
  visitor: '',
}

const visitorId = '1234567890'

const initialState = {
  id: visitorId,
  data: {
    '/': { VIEW_CAR: true },
    '/url1': { VIEW_PHONE: true },
  },
}

beforeAll(() => {
  const localStorageMock = (function () {
    return {
      getItem() {
        return JSON.stringify(initialState)
      },
      setItem(key, value) {
        mockedStore[key] = value
      },
    }
  })()

  Object.defineProperty(window, 'localStorage', { value: localStorageMock })
})

describe('set visits', () => {
  test('set phone visit for url /', async () => {
    mockedSetVisit('/', CarViewCountPayloadViewTypeEnum.Phone, visitorId)

    const expectedValue = {
      ...initialState,
      data: {
        ...initialState.data,
        '/': { VIEW_CAR: true, VIEW_PHONE: true },
      },
    }

    expect(JSON.parse(mockedStore.visitor)).toEqual(expectedValue)
  })

  test('set phone page visit for url /url1', async () => {
    mockedSetVisit('/', CarViewCountPayloadViewTypeEnum.Car, visitorId)

    const expectedValue = {
      ...initialState,
      data: {
        ...initialState.data,
        '/url1': { VIEW_PHONE: true },
      },
    }

    expect(JSON.parse(mockedStore.visitor)).toEqual(expectedValue)
  })

  test('set phone page visit for url /url2', async () => {
    mockedSetVisit('/url2', CarViewCountPayloadViewTypeEnum.Car, visitorId)

    const expectedValue = {
      ...initialState,
      data: {
        ...initialState.data,
        '/url2': { VIEW_PHONE: false, VIEW_CAR: true },
      },
    }

    expect(JSON.parse(mockedStore.visitor)).toEqual(expectedValue)
  })
})
