import { TFunction } from 'i18next'
import setPageTitle from '../utils/setPageTitle'
import setMetaTagByName from '../utils/setMetaTagByName'
import setMetaTagByProperty from '../utils/setMetaTagByProperty'
import setCanonicalAndAlternateLinks from '../utils/setCanonicalAndAlternateLinks'

export const searchRouteSEO = (t: TFunction) => {
  setPageTitle(t('search.title'))
  setMetaTagByName('description', t('search.description'))

  setMetaTagByName('keywords', t('search.keywords'))
  setMetaTagByName('application-name', t('search.shortAppName'))
  setMetaTagByName('apple-mobile-web-app-title', t('search.shortAppName'))

  setMetaTagByProperty('og:title', t('search.title'))
  setMetaTagByProperty('og:description', t('search.description'))

  setMetaTagByProperty('twitter:title', t('search.title'))
  setMetaTagByProperty('twitter:description', t('search.description'))

  setMetaTagByProperty('og:url', window.location.href)
  setMetaTagByProperty('twitter:url', window.location.href)

  setCanonicalAndAlternateLinks()
}
