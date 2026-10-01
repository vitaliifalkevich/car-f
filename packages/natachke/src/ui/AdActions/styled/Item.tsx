import styled from 'styled-components'
import { media } from 'styles/media'

const Item = styled.div<{ isNotActive?: boolean }>`
  display: flex;
  align-items: center;
  opacity: ${({ isNotActive }) => (isNotActive ? '0.4' : '1')};
  ${media.mobile`
    margin: 7px 0;
  `}
`

export default Item
