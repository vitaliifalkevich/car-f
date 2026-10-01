import { TFunction } from 'i18next'
import setPageTitle from '../utils/setPageTitle'
import setMetaTagByName from '../utils/setMetaTagByName'
import setMetaTagByProperty from '../utils/setMetaTagByProperty'
import setCanonicalAndAlternateLinks from '../utils/setCanonicalAndAlternateLinks'

export const topCatalogRouteSEO = (t: TFunction) => {
  setPageTitle(t('topCatalog.title'))
  setMetaTagByName('description', t('topCatalog.description'))

  setMetaTagByName('keywords', t('topCatalog.keywords'))
  setMetaTagByName('application-name', t('topCatalog.shortAppName'))
  setMetaTagByName('apple-mobile-web-app-title', t('topCatalog.shortAppName'))

  setMetaTagByProperty('og:title', t('topCatalog.title'))
  setMetaTagByProperty('og:description', t('topCatalog.description'))

  setMetaTagByProperty('twitter:title', t('topCatalog.title'))
  setMetaTagByProperty('twitter:description', t('topCatalog.description'))

  setMetaTagByProperty('og:url', window.location.href)
  setMetaTagByProperty('twitter:url', window.location.href)

  setCanonicalAndAlternateLinks()
}
