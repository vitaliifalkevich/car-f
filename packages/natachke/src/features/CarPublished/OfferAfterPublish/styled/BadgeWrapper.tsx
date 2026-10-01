import styled from 'styled-components'
import { media } from 'styles/media'

const BadgeWrapper = styled.div`
  position: absolute;
  right: 32px;
  top: -8px;
  ${media.mobile`
    display: none;
  `}
`

export default BadgeWrapper
