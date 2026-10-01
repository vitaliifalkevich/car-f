import React from 'react'
import styled from 'styled-components'
import burger from 'assets/icons/burger.svg'
import { useOpenModalByHash } from '../../hooks'
import { USER_MENU } from '../../features/PopUps/constants'

const Menu = styled.img`
  width: 18px;
  cursor: pointer;
  display: block;
  position: absolute;
  right: 15px;
  top: 21px;
`

const BurgerMenu: React.FC = () => {
  const openUserMenu = useOpenModalByHash(USER_MENU)
  return <Menu src={burger} alt="menu" onClick={() => openUserMenu()} />
}

export default BurgerMenu
