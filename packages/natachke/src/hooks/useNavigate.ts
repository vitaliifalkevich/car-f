import { useGenerateUrlWithLang } from 'hooks'
import { useHistory, useLocation } from 'react-router-dom'
import { useCallback } from 'react'
import {
  SIGN_UP_HASH,
  SIGN_IN_HASH,
  RESET_PASSWORD,
  CHANGE_PASSWORD,
  CLOSE_ACCOUNT,
  CLOSE_ACCOUNT_CONFIRMATION,
  WELCOME,
  CAR_IN_TOP_SUCCESS,
  TOP_CATALOG_SUCCESS,
} from 'features/PopUps/constants'
import { EDIT, PLACE_TOP, TOP_SEARCH, DEPOSIT } from 'routes'
import { useSelector } from 'react-redux'
import { getLanguage } from '../entities/Bootstrap/selectors'

interface OpenModalByHashArgs<T> {
  state?: T
}

export const useOpenModalByHash = (
  hash: string,
  replaceCurrentUrl?: boolean,
) => {
  const history = useHistory<any>()

  return useCallback(
    <T = unknown>({ state }: OpenModalByHashArgs<T> = {}) => {
      const { pathname, search, state: historyState } = history.location

      const newState = state
        ? historyState
          ? { ...historyState, ...state }
          : state
        : undefined

      replaceCurrentUrl
        ? history.replace(pathname + search + hash, newState)
        : history.push(pathname + search + hash, newState)
    },
    [history, replaceCurrentUrl, hash],
  )
}

const useGenerateUrlWithHash = (hash: string) => {
  const history = useHistory<any>()
  const { pathname, search } = history.location
  return pathname + search + hash
}

export const useNavigateWithLang = (): ((path: string) => void) => {
  const generateUrlWithLang = useGenerateUrlWithLang()
  const history = useHistory()
  return useCallback(
    (path: string) => {
      history.push(generateUrlWithLang(path))
    },
    [generateUrlWithLang, history],
  )
}

export const useChangeLangNavigate = (): ((path: string) => void) => {
  const history = useHistory()
  const currentLang = useSelector(getLanguage)

  return useCallback(
    lng => {
      const { pathname, search, hash, state } = history.location
      const newPath = pathname.replace(`/${currentLang}`, '')

      history.push('/' + lng + newPath + hash + search, state)
    },
    [currentLang, history],
  )
}

export const useCloseCurrentModal = (withSearch = true) => {
  const history = useHistory()

  return useCallback(() => {
    const { pathname, search, state } = history.location

    if (withSearch) history.replace(pathname + search, state)
    else history.replace(pathname, state)
  }, [history, withSearch])
}

export const useSignUpUrl = () => {
  return useGenerateUrlWithHash(SIGN_UP_HASH)
}

export const useWelcomeBannerUrl = () => {
  return useGenerateUrlWithHash(WELCOME)
}

export const useHomeUrl = () => {
  const generateUrlWithLang = useGenerateUrlWithLang()
  return generateUrlWithLang('/')
}

export const useProfileUrl = () => {
  const generateUrlWithLang = useGenerateUrlWithLang()
  return generateUrlWithLang('/account')
}

export const useFavoritesUrl = () => {
  const generateUrlWithLang = useGenerateUrlWithLang()
  return generateUrlWithLang('/account/favorites')
}

export const useSignInUrl = () => {
  return useGenerateUrlWithHash(SIGN_IN_HASH)
}

export const useForgotPasswordUrl = () => {
  return useGenerateUrlWithHash(RESET_PASSWORD)
}

export const useChangePasswordUrl = () => {
  return useGenerateUrlWithHash(CHANGE_PASSWORD)
}

export const useCloseAccountUrl = () => {
  return useGenerateUrlWithHash(CLOSE_ACCOUNT)
}

export const useCloseAccountConfirmationUrl = () => {
  return useGenerateUrlWithHash(CLOSE_ACCOUNT_CONFIRMATION)
}

export const useNavigateEditCar = () => {
  const history = useHistory<any>()
  const generateUrlWithLang = useGenerateUrlWithLang()
  return useCallback(
    (carUrl?: string) => {
      if (carUrl) history.push(generateUrlWithLang(`/${EDIT}/${carUrl}`))
    },
    [generateUrlWithLang, history],
  )
}

export const useNavigateTopInSearch = () => {
  const history = useHistory<any>()
  const generateUrlWithLang = useGenerateUrlWithLang()
  return useCallback(
    (carId?: number) => {
      if (carId) history.push(generateUrlWithLang(`/${TOP_SEARCH}/${carId}`))
    },
    [generateUrlWithLang, history],
  )
}

export const useNavigateCarInTopCatalog = () => {
  const history = useHistory<any>()
  const generateUrlWithLang = useGenerateUrlWithLang()
  return useCallback(
    (carId?: number) => {
      if (carId) history.push(generateUrlWithLang(`/${PLACE_TOP}/${carId}`))
    },
    [generateUrlWithLang, history],
  )
}

export const useNavigateHome = () => {
  const history = useHistory<any>()
  const generateUrlWithLang = useGenerateUrlWithLang()
  return useCallback(() => {
    history.push(generateUrlWithLang(`/`))
  }, [generateUrlWithLang, history])
}

export const useNavigateHomeSignIn = () => {
  const history = useHistory<any>()
  const generateUrlWithLang = useGenerateUrlWithLang()
  return useCallback(() => {
    history.push(generateUrlWithLang(`/${SIGN_IN_HASH}`))
  }, [generateUrlWithLang, history])
}

export const useNavigateSearch = () => {
  const history = useHistory<any>()
  const generateUrlWithLang = useGenerateUrlWithLang()
  return useCallback(
    (queries?: string) => {
      if (queries) history.push(generateUrlWithLang(`/search?${queries}`))
      else history.push(generateUrlWithLang(`/search/`))
    },
    [generateUrlWithLang, history],
  )
}

export const useNavigateAdvancedSearch = () => {
  const history = useHistory<any>()
  const generateUrlWithLang = useGenerateUrlWithLang()
  return useCallback(
    (queries?: string) => {
      if (queries)
        history.push(generateUrlWithLang(`/search/advanced?${queries}`))
      else history.push(generateUrlWithLang(`/search/advanced`))
    },
    [generateUrlWithLang, history],
  )
}

export const useNavigateAdvancedSearchWithCurrentSearch = () => {
  const history = useHistory<any>()
  const { search } = useLocation()
  const generateUrlWithLang = useGenerateUrlWithLang()
  return useCallback(() => {
    history.push(generateUrlWithLang(`/search/advanced` + search))
  }, [generateUrlWithLang, history, search])
}

export const useNavigateDeposit = () => {
  const history = useHistory<any>()
  const generateUrlWithLang = useGenerateUrlWithLang()
  return useCallback(() => {
    history.push(generateUrlWithLang(`/${DEPOSIT}`))
  }, [generateUrlWithLang, history])
}

export const useNavigateToTopCarSuccess = () => {
  const history = useHistory()
  const generateUrlWithLang = useGenerateUrlWithLang()
  return useCallback(() => {
    history.push(generateUrlWithLang(`/?toTop=true/${CAR_IN_TOP_SUCCESS}`))
  }, [generateUrlWithLang, history])
}

export const useNavigateTopSearchCarSuccess = () => {
  const history = useHistory()
  const generateUrlWithLang = useGenerateUrlWithLang()
  return useCallback(() => {
    history.push(
      generateUrlWithLang(`/?topSearchCar=true/${CAR_IN_TOP_SUCCESS}`),
    )
  }, [generateUrlWithLang, history])
}

export const useNavigateTopCatalogSuccess = () => {
  const history = useHistory()
  const generateUrlWithLang = useGenerateUrlWithLang()
  return useCallback(() => {
    history.push(generateUrlWithLang(`/${TOP_CATALOG_SUCCESS}`))
  }, [generateUrlWithLang, history])
}

export const useNavigateTopCatalog = () => {
  const history = useHistory<any>()
  const generateUrlWithLang = useGenerateUrlWithLang()
  return useCallback(() => {
    history.push(generateUrlWithLang(`/top-catalog`))
  }, [generateUrlWithLang, history])
}
