import React, { useEffect } from 'react'
import { PageTitle } from '../ui/Text'
import {
  MainContainer,
  TwoColumnsContainer,
  AccountRightContainer,
} from '../ui/Containers'
import { useTranslation } from 'react-i18next'
import UserInfoWithBalance from 'features/UserInfoWithBalance'
import ProfileMenu from 'features/ProfileMenu'
import MyCarsList from 'features/MyCarsList'
import BurgerMenu from 'ui/BurgerMenu'
import { useBreakpoint } from '../MediaQueriesProvider'
import { useDispatch, useSelector } from 'react-redux'
import { actions } from 'entities/MyCars/slice'
import { BlockLoader } from '../ui/Loaders'
import {
  changeCarVisibleStatusLoading,
  getMyCarsLoading,
  deleteCarLoading,
} from 'entities/MyCars/selectors'

const MyCars: React.FC = () => {
  const { t } = useTranslation()
  const breakpoints = useBreakpoint()
  const dispatch = useDispatch()
  const isMyCarsLoading = useSelector(getMyCarsLoading)
  const isChangeVisibleStatusLoading = useSelector(
    changeCarVisibleStatusLoading,
  )

  const isCarDeleteLoading = useSelector(deleteCarLoading)

  useEffect(() => {
    dispatch(actions.startGettingMyCars())
  }, [dispatch])

  return (
    <MainContainer>
      {breakpoints.mobile && <BurgerMenu />}
      <PageTitle withBorder={true}>{t(`myCars`)}</PageTitle>
      <UserInfoWithBalance />
      <TwoColumnsContainer>
        {!breakpoints.mobile && <ProfileMenu />}
        <AccountRightContainer>
          {isMyCarsLoading ||
          isChangeVisibleStatusLoading ||
          isCarDeleteLoading ? (
            <BlockLoader color="white" />
          ) : (
            <MyCarsList />
          )}
        </AccountRightContainer>
      </TwoColumnsContainer>
    </MainContainer>
  )
}

export default MyCars
