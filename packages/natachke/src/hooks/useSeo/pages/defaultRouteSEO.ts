import { TFunction } from 'i18next'
import setPageTitle from '../utils/setPageTitle'
import setMetaTagByName from '../utils/setMetaTagByName'
import setMetaTagByProperty from '../utils/setMetaTagByProperty'
import setCanonicalAndAlternateLinks from '../utils/setCanonicalAndAlternateLinks'

export const defaultRouteSEO = (t: TFunction) => {
  setPageTitle(t('default.title'))
  setMetaTagByName('description', t('default.description'))
  setMetaTagByName('keywords', t('default.keywords'))
  setMetaTagByName('application-name', t('default.shortAppName'))
  setMetaTagByName('apple-mobile-web-app-title', t('default.shortAppName'))

  setMetaTagByProperty('og:title', t('default.title'))
  setMetaTagByProperty('og:description', t('default.description'))

  setMetaTagByProperty('twitter:title', t('default.title'))
  setMetaTagByProperty('twitter:description', t('default.description'))

  setMetaTagByProperty('og:url', window.location.href)
  setMetaTagByProperty('twitter:url', window.location.href)

  setCanonicalAndAlternateLinks()
}
