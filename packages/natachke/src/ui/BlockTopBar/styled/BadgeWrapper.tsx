import styled from 'styled-components'
import { media } from 'styles/media'

const BadgeWrapper = styled.div`
  margin-left: 30px;
  ${media.tablet`
    margin-left: 28px;
  `}
  ${media.mobile`
    margin-left: 10px;
  `}
`

export default BadgeWrapper
