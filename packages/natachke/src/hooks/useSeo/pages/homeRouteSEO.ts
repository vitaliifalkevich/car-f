import { TFunction } from 'i18next'
import setPageTitle from '../utils/setPageTitle'
import setMetaTagByName from '../utils/setMetaTagByName'
import setMetaTagByProperty from '../utils/setMetaTagByProperty'
import setCanonicalAndAlternateLinks from '../utils/setCanonicalAndAlternateLinks'

export const homeRouteSEO = (t: TFunction) => {
  setPageTitle(t('home.title'))
  setMetaTagByName('description', t('home.description'))
  setMetaTagByName('keywords', t('home.keywords'))
  setMetaTagByName('application-name', t('home.shortAppName'))
  setMetaTagByName('apple-mobile-web-app-title', t('home.shortAppName'))

  setMetaTagByProperty('og:title', t('home.title'))
  setMetaTagByProperty('og:description', t('home.description'))

  setMetaTagByProperty('twitter:title', t('home.title'))
  setMetaTagByProperty('twitter:description', t('home.description'))

  setMetaTagByProperty('og:url', window.location.href)
  setMetaTagByProperty('twitter:url', window.location.href)

  setCanonicalAndAlternateLinks()
}
