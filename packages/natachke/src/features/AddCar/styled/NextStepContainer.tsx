import styled from 'styled-components'
import { media } from 'styles/media'

const NextStepContainer = styled.div`
  margin: 50px auto 0px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  grid-gap: 25px;
  button {
    max-width: 317px;
    width: 100%;
  }
  ${media.tablet`
   button {
    max-width: 225px;
  }
  `}
  ${media.mobile`
    justify-content: center;
     button {
       max-width: 210px;
     }
  `}
`

export default NextStepContainer
