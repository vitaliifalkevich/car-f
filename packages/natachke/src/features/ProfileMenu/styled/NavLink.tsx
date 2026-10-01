import { NavLink as Link } from 'react-router-dom'
import styled from 'styled-components'

const NavLink = styled(Link)`
  display: flex;
  align-items: center;
  border-radius: 5px;
  margin: 3px 0;
  padding: 9px 15px;
  cursor: pointer;
  &:hover {
    background: ${({ theme }) => theme.colors.itemHoverBackground};
  }
  &.active-link {
    background: ${({ theme }) => theme.colors.itemHoverBackground};
  }
`

export default NavLink
