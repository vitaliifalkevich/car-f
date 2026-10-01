import { TFunction } from 'i18next'
import setPageTitle from '../utils/setPageTitle'
import setMetaTagByName from '../utils/setMetaTagByName'
import setMetaTagByProperty from '../utils/setMetaTagByProperty'
import setCanonicalAndAlternateLinks from '../utils/setCanonicalAndAlternateLinks'

export const termsAndConditionsSEO = (t: TFunction) => {
  setPageTitle(t('terms.title'))
  setMetaTagByName('description', t('terms.description'))

  setMetaTagByName('keywords', t('terms.keywords'))
  setMetaTagByName('application-name', t('default.shortAppName'))
  setMetaTagByName('apple-mobile-web-app-title', t('terms.shortAppName'))

  setMetaTagByProperty('og:title', t('terms.title'))
  setMetaTagByProperty('og:description', t('terms.description'))

  setMetaTagByProperty('twitter:title', t('terms.title'))
  setMetaTagByProperty('twitter:description', t('terms.description'))

  setMetaTagByProperty('og:url', window.location.href)
  setMetaTagByProperty('twitter:url', window.location.href)

  setCanonicalAndAlternateLinks()
}
