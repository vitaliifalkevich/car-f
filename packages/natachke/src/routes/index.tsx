import React, { useMemo } from 'react'
import { useSelector } from 'react-redux'
import { Route, useLocation, Redirect, Switch } from 'react-router-dom'
import { getIsAuthorized } from 'entities/Bootstrap/selectors'
import { useGenerateUrlWithLang } from '../hooks'
import config from 'config'
const Error404 = React.lazy(() => import('pages/Error404'))
const Search = React.lazy(() => import('pages/Search'))
const Home = React.lazy(() => import('pages/Home'))
const AdvancedSearch = React.lazy(() => import('pages/AdvancedSearch'))
const Error404Login = React.lazy(() => import('pages/Error404Login'))
const CarDetails = React.lazy(() => import('pages/CarDetails'))
const TermsAndConditions = React.lazy(() => import('pages/TermsAndConditions'))
const PrivacyPolicy = React.lazy(() => import('pages/PrivacyPolicy'))
const AmlKYCPolicy = React.lazy(() => import('pages/AmlKYCPolicy'))
const SellCar = React.lazy(() => import('pages/SellCar'))
const EditCar = React.lazy(() => import('pages/EditCar'))
const SellCarSuccess = React.lazy(() => import('pages/SellCarSuccess'))
const MyCars = React.lazy(() => import('pages/MyCars'))
const Favorites = React.lazy(() => import('pages/Favorites'))
const Settings = React.lazy(() => import('pages/Settings'))
const ConfirmResetPassword = React.lazy(() =>
  import('pages/ConfirmResetPassword'),
)

const langConfig = config.getLangConfigForRouter()
export const EDIT = 'edit'
export const TOP_SEARCH = 'top-search'
export const DEPOSIT = 'deposit'
export const PLACE_TOP = 'place-top'

export const homeRoute = `${langConfig}/`
export const confirmResetPassword = `${langConfig}/confirm-reset-password`
export const confirmEmail = `${langConfig}/confirm-email`
export const unsubscribeMailing = `${langConfig}/unsubscribe`
export const sellCarRoute = `${langConfig}/sell`
export const editCarRoute = `${langConfig}/edit/:carUrl`
export const sellSuccessCarRoute = `${langConfig}/sell/success`
export const searchRoute = `${langConfig}/search`
export const topCatalogRoute = `${langConfig}/top-catalog`
export const carDetailsRoute = `${langConfig}/cars/:carUrl`
export const placeCarTopInSearchRoute = `${langConfig}/${TOP_SEARCH}/:carId`
export const placeCarInTopCatalogRoute = `${langConfig}/${PLACE_TOP}/:carId`
export const depositRoute = `${langConfig}/${DEPOSIT}`
export const carAdvancedSearch = `${searchRoute}/advanced`
export const termsAndConditions = `${langConfig}/terms-and-conditions`
export const privacyRoute = `${langConfig}/privacy-policy`
export const amlKYCRoute = `${langConfig}/aml-kyc-policy`

export const accountRoute = `${langConfig}/account`
export const myCarsRoute = `${accountRoute}/my-cars`
export const mailingRoute = `${accountRoute}/mailing`
export const favoritesRoute = `${accountRoute}/favorites`
export const messagesRoute = `${accountRoute}/messages`
export const settingsRoute = `${accountRoute}/settings`

export const Routes: React.FC = () => {
  const isAuth = useSelector(getIsAuthorized)
  const generateUrlWithLang = useGenerateUrlWithLang()

  const protectedRoutes = useMemo(() => {
    if (isAuth === false) {
      return <Error404Login />
    }

    return (
      <Switch>
        <Route exact path={accountRoute}>
          <Redirect to={generateUrlWithLang('/account/my-cars')} />
        </Route>
        <Route exact path={myCarsRoute} component={MyCars} />
        <Route exact path={favoritesRoute} component={Favorites} />
        <Route exact path={settingsRoute} component={Settings} />
        <Route path="*" component={Error404} />
      </Switch>
    )
  }, [generateUrlWithLang, isAuth])

  return (
    <Switch>
      <Route path={homeRoute} exact render={() => <Home />} />
      <Route path={searchRoute} exact render={() => <Search />} />
      <Route path={carDetailsRoute} exact render={() => <CarDetails />} />
      <Route path={carAdvancedSearch} exact render={() => <AdvancedSearch />} />
      <Route path={sellCarRoute} exact render={() => <SellCar />} />
      <Route path={editCarRoute} exact render={() => <EditCar />} />
      <Route
        path={sellSuccessCarRoute}
        exact
        render={() => <SellCarSuccess />}
      />
      <Route
        path={confirmResetPassword}
        exact
        render={() => <ConfirmResetPassword />}
      />

      <Route
        path={termsAndConditions}
        exact
        render={() => <TermsAndConditions />}
      />
      <Route path={privacyRoute} exact render={() => <PrivacyPolicy />} />
      <Route path={amlKYCRoute} exact render={() => <AmlKYCPolicy />} />
      {protectedRoutes}
      <Route path="*" component={Error404} />
    </Switch>
  )
}

export function useQuery() {
  return new URLSearchParams(useLocation().search)
}

export const getQueriesAsObject = () =>
  Object.fromEntries(new URLSearchParams(window.location.search))

export function prepareQueries(object) {
  return new URLSearchParams(object).toString()
}
