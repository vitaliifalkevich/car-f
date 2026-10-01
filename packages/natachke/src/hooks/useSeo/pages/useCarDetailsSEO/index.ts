import { useLocation, matchPath } from 'react-router-dom'
import { useEffect } from 'react'
import { carDetailsRoute } from 'routes'
import { useTranslation } from 'react-i18next'
import { useGeneratePageTitle } from './useGeneratePageTitle'
import { ICarEntity } from 'entities/CarInfo/types'
import { useGeneratePageDescription } from './useGeneratePageDescription'
import { useGenerateKeywords } from './useGenerateKeywords'
import setMetaTagByName from '../../utils/setMetaTagByName'
import setMetaTagByProperty from '../../utils/setMetaTagByProperty'
import setCanonicalAndAlternateLinks from '../../utils/setCanonicalAndAlternateLinks'
import { useGenerateSocialImage } from './useGenerateSocialImage'
import { useSelector } from 'react-redux'
import { getLanguage } from 'entities/Bootstrap/selectors'

export const useCarDetailsSEO = (carInfo: ICarEntity | null) => {
  const { t, ready } = useTranslation('meta', { useSuspense: false })
  const { pathname } = useLocation()
  const generatePageTitle = useGeneratePageTitle(carInfo)
  const generatePageDescription = useGeneratePageDescription(carInfo)
  const generateKeywords = useGenerateKeywords(carInfo)
  const generateSocialImage = useGenerateSocialImage(carInfo)
  const lang = useSelector(getLanguage)

  useEffect(() => {
    if (!ready) return
    const isPageMatched = !!matchPath(pathname, {
      path: carDetailsRoute,
      exact: true,
      strict: false,
    })
    if (!isPageMatched) return

    generatePageTitle()
    generatePageDescription()
    generateKeywords()
    generateSocialImage()

    if (lang !== document.documentElement.getAttribute('lang'))
      document.documentElement.setAttribute('lang', lang)

    setMetaTagByName('application-name', t('car.shortAppName'))
    setMetaTagByName('apple-mobile-web-app-title', t('car.shortAppName'))

    setMetaTagByProperty('og:url', window.location.href)
    setMetaTagByProperty('twitter:url', window.location.href)

    setCanonicalAndAlternateLinks()
  }, [
    generateKeywords,
    generatePageDescription,
    generatePageTitle,
    generateSocialImage,
    lang,
    pathname,
    ready,
    t,
  ])
}
