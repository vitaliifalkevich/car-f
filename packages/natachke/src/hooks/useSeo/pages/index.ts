import { homeRouteSEO } from './homeRouteSEO'
import { termsAndConditionsSEO } from './termsAndConditionsSEO'
import { privacyRouteSEO } from './privacyRouteSEO'
import { sellCarRouteSEO } from './sellCarRouteSEO'
import { topCatalogRouteSEO } from './topCatalogRouteSEO'
import { searchRouteSEO } from './searchRouteSEO'
import { carAdvancedSearchSEO } from './carAdvancedSearchSEO'
export * from './defaultRouteSEO'

export default {
  homeRoute: homeRouteSEO,
  termsAndConditions: termsAndConditionsSEO,
  privacyRoute: privacyRouteSEO,
  sellCarRoute: sellCarRouteSEO,
  topCatalogRoute: topCatalogRouteSEO,
  searchRoute: searchRouteSEO,
  carAdvancedSearch: carAdvancedSearchSEO,
}
