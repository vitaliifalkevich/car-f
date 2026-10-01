import styled from 'styled-components'
import { media } from 'styles/media'

const Wrapper = styled.div`
  display: grid;
  grid-gap: 35px;
  grid-template-columns: 568px auto;
  margin: 31px 0;
  ${media.tablet`
    grid-template-columns: auto;
    margin: 21px 0;
  `}
  ${media.mobile`
    grid-template-columns: auto;
     margin: 0 -15px;
  `}
`

export default Wrapper
