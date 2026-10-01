import styled from 'styled-components'
import { media } from 'styles/media'

const ButtonWrapper = styled.div`
  margin-top: 40px;
  position: absolute;
  bottom: 0;
  width: 100%;
  button {
    width: 100%;
    &:nth-child(2) {
      margin-top: 12px;
    }
  }
  ${media.mobile`
    position: initial;
  `}
`

export default ButtonWrapper
