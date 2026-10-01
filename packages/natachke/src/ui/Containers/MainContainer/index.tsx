import styled from 'styled-components'
import { media } from 'styles/media'

const MainContainer = styled.div`
  max-width: 975px;
  margin: 0 auto;
  padding: 0 25px;
  ${media.tablet`
    max-width: 865px;
    overflow-x: hidden
  `}
  ${media.mobile`
   padding: 0 15px;
   position: relative;
   overflow-x: hidden
  `}
`

export default MainContainer
