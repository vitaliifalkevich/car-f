import React from 'react'
import { Routes } from 'routes'
import { GlobalStyle } from '../styles/global-styles'
import Header from 'features/Header'
import Footer from 'features/Footer'
import PopUp from 'features/PopUps'
import useInjectEntities from 'entities/useInjectEntities'
import useInjectRouteLanguage from 'locales/useInjectRouteLanguage'
import AcceptCookiesNotification from '../ui/AcceptCookiesNotification'
import { useSeo } from '../hooks/useSeo'
import InstallPWA from '../ui/InstallPWA'

const App: React.FC = () => {
  useInjectEntities()
  useInjectRouteLanguage()
  useSeo()

  return (
    <>
      <Header />
      <Routes />
      <GlobalStyle />
      <PopUp />
      <Footer />
      <AcceptCookiesNotification />
      <InstallPWA />
    </>
  )
}

export default App
