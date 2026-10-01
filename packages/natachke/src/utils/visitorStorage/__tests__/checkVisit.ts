import { checkVisit } from '../index'
import { CarViewCountPayloadViewTypeEnum } from '@handber/natachke-api-client'

const mockedCheckVisit = jest.fn(checkVisit)

beforeAll(() => {
  const localStorageMock = (function () {
    const store = {
      id: '1234567890',
      data: {
        '/': {
          VIEW_CAR: true,
          VIEW_PHONE: true,
        },
      },
    }
    return {
      getItem() {
        return JSON.stringify(store)
      },
    }
  })()

  Object.defineProperty(window, 'localStorage', { value: localStorageMock })
})

describe('check visits', () => {
  test('get existed url and view car', async () => {
    expect(
      mockedCheckVisit('/', CarViewCountPayloadViewTypeEnum.Phone),
    ).toEqual({
      wasVisit: true,
      visitorId: '1234567890',
    })
  })

  test('get existed url and view car', async () => {
    expect(mockedCheckVisit('/', CarViewCountPayloadViewTypeEnum.Car)).toEqual({
      wasVisit: true,
      visitorId: '1234567890',
    })
  })

  test('get existed url and view car', async () => {
    expect(
      mockedCheckVisit('/not_found_url', CarViewCountPayloadViewTypeEnum.Car),
    ).toEqual({
      wasVisit: false,
      visitorId: '1234567890',
    })
  })
})
