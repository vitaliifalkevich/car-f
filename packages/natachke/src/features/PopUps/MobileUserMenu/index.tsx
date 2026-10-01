import React from 'react'
import Modal from 'ui/Modal'
import UserInfo from './UserInfo'
import { Container } from './styled'
import HorizontalLine from 'ui/HorizontalLine'
import ProfileMenu from 'features/ProfileMenu'
import { useSelector } from 'react-redux'
import { getIsAuthorized } from 'entities/Bootstrap/selectors'

const MobileUserMenu: React.FC = () => {
  const isAuth = useSelector(getIsAuthorized)
  if (!isAuth) return null
  return (
    <Modal fullScreen={true}>
      <Container>
        <UserInfo />
        <HorizontalLine />
        <div style={{ marginTop: '12px' }} />
        <ProfileMenu />
      </Container>
    </Modal>
  )
}

export default MobileUserMenu
