import i18next from 'i18next'
import { initReactI18next } from 'react-i18next'
import backend from 'i18next-xhr-backend'
import Lockr from 'lockr'
import config, { env } from 'config'
import { getUserApi } from '../api'
import { getAuthToken } from '../utils'
const { authToken } = config

const langDetector = {
  type: 'languageDetector',
  async: true,
  init: function (services, detectorOptions, i18nextOptions) {},
  detect: async function (detectLanguageCallback) {
    try {
      const userLang = await getUserLocale()
      if (userLang) return detectLanguageCallback(userLang)

      const langInLocalStorage = Lockr.get('i18nextLng')

      if (langInLocalStorage) {
        detectLanguageCallback(langInLocalStorage)
      } else {
        detectLanguageCallback(env.defaultLang)
      }
    } catch (e) {
      detectLanguageCallback(env.defaultLang)
    }
  },
  cacheUserLanguage: function (lng) {
    Lockr.set('i18nextLng', lng)
  },
}

export const i18n = i18next
  .use(backend)
  .use(initReactI18next)
  // @ts-ignore
  .use(langDetector)
  .init({
    debug: false,
    load: 'currentOnly',
    fallbackLng: env.defaultLang,
    returnEmptyString: false,

    interpolation: {
      escapeValue: false,
    },
    backend: {
      loadPath: () => {
        const date = new Date()
        return `/locales/{{lng}}/{{ns}}.json?v=${
          String(date.getHours()) +
          String(date.getDate()) +
          String(date.getMonth() + String(date.getFullYear()))
        }`
      },
    },
    react: {
      wait: true,
    },
  })

async function getUserLocale(): Promise<string | null> {
  const authTokenFromStorage = getAuthToken(authToken)
  if (!authTokenFromStorage) return null

  try {
    const userApi = getUserApi()
    const response = await userApi.getUser()
    return response.data?.user?.locale || null
  } catch (e) {
    return null
  }
}
