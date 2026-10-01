import styled from 'styled-components'
import { media } from 'styles/media'

const ButtonWrapper = styled.div`
  margin-top: 22px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${media.mobile`
    margin-top: 15px;
  `}
`

export default ButtonWrapper
