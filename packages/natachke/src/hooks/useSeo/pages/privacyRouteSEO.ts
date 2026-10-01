import { TFunction } from 'i18next'
import setPageTitle from '../utils/setPageTitle'
import setMetaTagByName from '../utils/setMetaTagByName'
import setMetaTagByProperty from '../utils/setMetaTagByProperty'
import setCanonicalAndAlternateLinks from '../utils/setCanonicalAndAlternateLinks'

export const privacyRouteSEO = (t: TFunction) => {
  setPageTitle(t('privacyPolicy.title'))
  setMetaTagByName('description', t('privacyPolicy.description'))

  setMetaTagByName('keywords', t('privacyPolicy.keywords'))
  setMetaTagByName('application-name', t('privacyPolicy.shortAppName'))
  setMetaTagByName(
    'apple-mobile-web-app-title',
    t('privacyPolicy.shortAppName'),
  )

  setMetaTagByProperty('og:title', t('privacyPolicy.title'))
  setMetaTagByProperty('og:description', t('privacyPolicy.description'))

  setMetaTagByProperty('twitter:title', t('privacyPolicy.title'))
  setMetaTagByProperty('twitter:description', t('privacyPolicy.description'))

  setMetaTagByProperty('og:url', window.location.href)
  setMetaTagByProperty('twitter:url', window.location.href)

  setCanonicalAndAlternateLinks()
}
