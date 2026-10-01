import { setVisitorId } from '../index'

const mockedSetVisitorId = jest.fn(setVisitorId)

let mockedStore = {
  visitor: '',
}

const visitorId = '1234567890'

const initialState = {
  data: {
    '/': {
      data1: 'data1',
    },
    '/url2': {
      data2: 'data2',
    },
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

describe('set visitorId', () => {
  test('set visitor id when state is not empty', async () => {
    mockedSetVisitorId(visitorId)
    const expectedValue = { id: visitorId, data: initialState.data }

    expect(JSON.parse(mockedStore.visitor)).toEqual(expectedValue)
  })
})
