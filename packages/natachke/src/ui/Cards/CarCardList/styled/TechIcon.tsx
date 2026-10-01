import styled from 'styled-components'
import { media } from 'styles/media'

const TechIcon = styled.img`
  width: 13px;
  height: 13px;
  object-fit: contain;
  ${media.mobile`
    width: 11px;
    height: 11px;
  `}
`

export default TechIcon
