import { useEffect, useMemo, useCallback } from 'react'
import { useHistory, useRouteMatch } from 'react-router-dom'
import config from 'config'
import { useDispatch, useSelector } from 'react-redux'
import { actions } from 'entities/Bootstrap/slice'
import { useTranslation } from 'react-i18next'
import changeLanguage from 'locales/changeLanguage'
import {
  getLanguage,
  getLanguagesByIdConfig,
  getUserProfile,
} from 'entities/Bootstrap/selectors'

const langConfigForRouter = config.getLangConfigForRouter()

const useInjectRouteLanguage = () => {
  const match = useRouteMatch<{ lang: string }>(langConfigForRouter)
  const history = useHistory()
  const dispatch = useDispatch()
  const { i18n } = useTranslation(undefined, { useSuspense: false })
  const userProfile = useSelector(getUserProfile)

  const changeLangInHTML = useCallback(lang => {
    document.documentElement.setAttribute('lang', lang)
  }, [])

  const setupLanguage = useSelector(getLanguage)
  const languagesConfig = useSelector(getLanguagesByIdConfig)

  const { pathname, search, hash, state } = history.location

  const lang = useMemo(() => match?.params?.lang, [match])

  const changeLang = useCallback(
    (lang: string) => {
      changeLangInHTML(lang)
      dispatch(actions.setCurrentLanguage(lang))
      changeLanguage(lang)
    },
    [changeLangInHTML, dispatch],
  )

  useEffect(() => {
    if (lang) {
      if (!userProfile || userProfile?.locale === lang) return
      dispatch(actions.changeAuthUserLanguage(lang))
    }
  }, [dispatch, lang, userProfile])

  useEffect(() => {
    if (
      lang !== undefined &&
      (lang !== i18n.language || lang !== setupLanguage) &&
      languagesConfig[lang]
    ) {
      changeLang(lang)
    }
  }, [changeLang, i18n.language, lang, languagesConfig, setupLanguage])

  useEffect(() => {
    if (!lang && i18n.language) {
      history.replace('/' + i18n.language + pathname + search + hash, state)
      changeLangInHTML(i18n.language)
    }
  }, [
    hash,
    history,
    i18n.language,
    lang,
    pathname,
    search,
    state,
    languagesConfig,
    changeLangInHTML,
  ])
}

export default useInjectRouteLanguage
