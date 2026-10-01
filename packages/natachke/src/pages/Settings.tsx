import React from 'react'
import BurgerMenu from '../ui/BurgerMenu'
import { PageTitle } from '../ui/Text'
import UserInfoWithBalance from '../features/UserInfoWithBalance'
import { MainContainer, TwoColumnsContainer } from '../ui/Containers'
import ProfileMenu from '../features/ProfileMenu'
import { useBreakpoint } from '../MediaQueriesProvider'
import { useTranslation } from 'react-i18next'

const Settings: React.FC = () => {
  const { t } = useTranslation()
  const breakpoints = useBreakpoint()
  return (
    <MainContainer>
      {breakpoints.mobile && <BurgerMenu />}
      <PageTitle withBorder={true}>{t(`settings.title`)}</PageTitle>
      {!breakpoints.mobile && <UserInfoWithBalance />}
      <TwoColumnsContainer>
        {!breakpoints.mobile && <ProfileMenu />}
      </TwoColumnsContainer>
    </MainContainer>
  )
}

export default Settings
