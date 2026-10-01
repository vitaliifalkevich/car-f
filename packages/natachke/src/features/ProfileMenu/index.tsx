import React, { useCallback } from 'react'
import ComponentThemeProvider from 'styles/theme/ComponentThemeProvider'

import themes from './themes'
import {
  cars,
  calendar,
  favorites,
  messages,
  settings,
  logout,
} from 'assets/icons/profileMenu/assets'
import { actions } from 'entities/Auth/slice'
import { Container, Icon, Text, NavLink, Item } from './styled'
import { useTranslation } from 'react-i18next'
import { useGenerateUrlWithLang, useHomeUrl } from '../../hooks'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'

const ProfileMenu: React.FC = () => {
  const generateUrlWithLang = useGenerateUrlWithLang()
  const { t } = useTranslation()
  const dispatch = useDispatch()
  const homeUrl = useHomeUrl()
  const history = useHistory()
  const navigateHomeUrl = useCallback(() => {
    history.push(homeUrl)
  }, [history, homeUrl])

  const logOut = useCallback(() => {
    dispatch(actions.logOut({ successAction: navigateHomeUrl }))
  }, [dispatch, navigateHomeUrl])

  return (
    <ComponentThemeProvider themes={themes}>
      <Container>
        <NavLink
          to={generateUrlWithLang('/account/my-cars')}
          activeClassName="active-link"
        >
          <Icon src={cars} alt="cars" />
          <Text>{t('profileMenu.myAds')}</Text>
        </NavLink>

        <NavLink
          to={generateUrlWithLang('/account/mailing')}
          activeClassName="active-link"
        >
          <Icon src={calendar} alt="calendar" />
          <Text>{t('profileMenu.mailing')}</Text>
        </NavLink>

        <NavLink
          to={generateUrlWithLang('/account/favorites')}
          activeClassName="active-link"
        >
          <Icon src={favorites} alt="favorites" />
          <Text>{t('profileMenu.favorites')}</Text>
        </NavLink>

        <NavLink
          to={generateUrlWithLang('/account/messages')}
          activeClassName="active-link"
        >
          <Icon src={messages} alt="messages" />
          <Text>{t('profileMenu.messages')}</Text>
        </NavLink>

        <NavLink
          to={generateUrlWithLang('/account/settings')}
          activeClassName="active-link"
        >
          <Icon src={settings} alt="settings" />
          <Text>{t('profileMenu.settings')}</Text>
        </NavLink>
        <Item onClick={logOut}>
          <Icon src={logout} alt="logout" />
          <Text>{t('profileMenu.logout')}</Text>
        </Item>
      </Container>
    </ComponentThemeProvider>
  )
}

export default ProfileMenu
