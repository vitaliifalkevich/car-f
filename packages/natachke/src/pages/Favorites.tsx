import React from 'react'
import { PageTitle } from '../ui/Text'
import {
  AccountRightContainer,
  MainContainer,
  TwoColumnsContainer,
} from '../ui/Containers'
import { useTranslation } from 'react-i18next'
import UserInfoWithBalance from 'features/UserInfoWithBalance'
import ProfileMenu from 'features/ProfileMenu'
import FavoritesCarsList from 'features/FavoritesCarsList'
import BurgerMenu from 'ui/BurgerMenu'
import { useBreakpoint } from '../MediaQueriesProvider'
import { useSelector } from 'react-redux'
import {
  getFavoriteCarsLoading,
  deleteFavoriteCarLoading,
} from 'entities/Favorites/selectors'
import { BlockLoader } from '../ui/Loaders'

const Favorites: React.FC = () => {
  const { t } = useTranslation()
  const breakpoints = useBreakpoint()
  const isFavoriteCarsLoading = useSelector(getFavoriteCarsLoading)
  const isFavoriteCarDeleteLoading = useSelector(deleteFavoriteCarLoading)

  return (
    <MainContainer>
      {breakpoints.mobile && <BurgerMenu />}
      <PageTitle withBorder={true}>{t(`favorites`)}</PageTitle>
      {!breakpoints.mobile && <UserInfoWithBalance />}
      <TwoColumnsContainer>
        {!breakpoints.mobile && <ProfileMenu />}
        <AccountRightContainer>
          {isFavoriteCarsLoading || isFavoriteCarDeleteLoading ? (
            <BlockLoader color="white" />
          ) : (
            <FavoritesCarsList />
          )}
        </AccountRightContainer>
      </TwoColumnsContainer>
    </MainContainer>
  )
}

export default Favorites
