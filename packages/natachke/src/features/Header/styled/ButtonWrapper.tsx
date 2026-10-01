import styled from 'styled-components'
import { media } from 'styles/media'

const ButtonWrapper = styled.div`
  margin: 0 28px 0 34px;
  button {
    min-width: 200px;
  }
  ${media.tablet`
    margin-right: 17px;
    margin-left: 17px;
  `}
  ${media.mobile`
    margin-right: 15px;
    margin-left: 3px;
    button {
      width: 32px;
      height: 30px;
      min-width: 0;
      padding: 5px;
      & > img {
        margin: 0;
      }
    }
  `}
`

export default ButtonWrapper
