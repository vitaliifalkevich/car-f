import styled from 'styled-components'
import { media } from 'styles/media'
const SliderBlockContainer = styled.div`
  max-width: 1085px;
  margin: 0 auto;
  padding: 0 25px;
  ${media.tablet`
    max-width: 865px;
    padding: 0;
  `}
  ${media.mobile`
    margin: 0 -34px;
    padding: 0 15px;
  `}
`

export default SliderBlockContainer
