import styled from 'styled-components'
import { media } from 'styles/media'

const ButtonWrapper = styled.div`
  margin-top: 12px;
  button {
    width: 100%;
  }
  ${media.tablet`
    margin-top: 0;
  `}
`

export default ButtonWrapper
