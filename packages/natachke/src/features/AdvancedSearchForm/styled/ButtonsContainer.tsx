import styled from 'styled-components'
import { media } from 'styles/media'

const ButtonsContainer = styled.div`
  display: flex;
  align-items: center;
  grid-gap: 12px;
  & > button:first-child {
    width: 250px;
  }
  ${media.mobile`
   & > button:nth-child(2) {
    width: 100%;
    max-width: 33.3%;
    }
  `}
`

export default ButtonsContainer
