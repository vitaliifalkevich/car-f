import styled from 'styled-components'
import { media } from 'styles/media'

const Icon = styled.img`
  width: 14px;
  height: 14px;
  object-fit: contain;
  margin-right: 7px;
  ${media.mobile`
    width: 13px;
    height: 13px;
      margin-right: 4.5px;
  `}
`

export default Icon
