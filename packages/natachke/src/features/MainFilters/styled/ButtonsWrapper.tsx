import styled from 'styled-components'
import { media } from 'styles/media'

const ButtonsWrapper = styled.div`
  display: flex;
  margin-top: 13px;
  & > button:first-child {
    margin-right: 16px;
  }
  ${media.mobile`
    justify-content: space-between;
    button {
      width: 50%;
    }
  `}
`

export default ButtonsWrapper
