import { TFunction } from 'i18next'
import setPageTitle from '../utils/setPageTitle'
import setMetaTagByName from '../utils/setMetaTagByName'
import setMetaTagByProperty from '../utils/setMetaTagByProperty'
import setCanonicalAndAlternateLinks from '../utils/setCanonicalAndAlternateLinks'

export const carAdvancedSearchSEO = (t: TFunction) => {
  setPageTitle(t('advancedSearch.title'))
  setMetaTagByName('description', t('advancedSearch.description'))

  setMetaTagByName('keywords', t('advancedSearch.keywords'))
  setMetaTagByName('application-name', t('advancedSearch.shortAppName'))
  setMetaTagByName(
    'apple-mobile-web-app-title',
    t('advancedSearch.shortAppName'),
  )

  setMetaTagByProperty('og:title', t('advancedSearch.title'))
  setMetaTagByProperty('og:description', t('advancedSearch.description'))

  setMetaTagByProperty('twitter:title', t('advancedSearch.title'))
  setMetaTagByProperty('twitter:description', t('advancedSearch.description'))

  setMetaTagByProperty('og:url', window.location.href)
  setMetaTagByProperty('twitter:url', window.location.href)

  setCanonicalAndAlternateLinks()
}
