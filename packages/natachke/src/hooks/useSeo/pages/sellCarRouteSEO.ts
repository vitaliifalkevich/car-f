import { TFunction } from 'i18next'
import setPageTitle from '../utils/setPageTitle'
import setMetaTagByName from '../utils/setMetaTagByName'
import setMetaTagByProperty from '../utils/setMetaTagByProperty'
import setCanonicalAndAlternateLinks from '../utils/setCanonicalAndAlternateLinks'

export const sellCarRouteSEO = (t: TFunction) => {
  setPageTitle(t('sellCar.title'))
  setMetaTagByName('description', t('sellCar.description'))

  setMetaTagByName('keywords', t('sellCar.keywords'))
  setMetaTagByName('application-name', t('sellCar.shortAppName'))
  setMetaTagByName('apple-mobile-web-app-title', t('sellCar.shortAppName'))

  setMetaTagByProperty('og:title', t('sellCar.title'))
  setMetaTagByProperty('og:description', t('sellCar.description'))

  setMetaTagByProperty('twitter:title', t('sellCar.title'))
  setMetaTagByProperty('twitter:description', t('sellCar.description'))

  setMetaTagByProperty('og:url', window.location.href)
  setMetaTagByProperty('twitter:url', window.location.href)

  setCanonicalAndAlternateLinks()
}
