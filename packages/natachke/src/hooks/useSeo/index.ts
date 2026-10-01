import { useTranslation } from 'react-i18next'
import { useLocation, matchPath } from 'react-router-dom'
import seo from 'config/seo'
import { useEffect } from 'react'
import setSEOByPage, { defaultRouteSEO } from './pages'
import { carDetailsRoute } from '../../routes'

export const useSeo = () => {
  const { t, ready } = useTranslation('meta', { useSuspense: false })
  const { pathname } = useLocation()

  useEffect(() => {
    if (!ready) return
    let isPageMatched = false
    Object.keys(seo.paths).forEach(key => {
      const isMatch = matchPath(pathname, {
        path: seo.paths[key],
        exact: true,
        strict: false,
      })
      if (!!isMatch && setSEOByPage[key]) {
        isPageMatched = true
        setSEOByPage[key]?.(t)
      }
    })

    isPageMatched = !!matchPath(pathname, {
      path: carDetailsRoute,
      exact: true,
      strict: false,
    })

    if (!isPageMatched) defaultRouteSEO(t)
  }, [pathname, ready, t])
}
