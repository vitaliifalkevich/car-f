import styled from 'styled-components'
import { media } from 'styles/media'

const Wrapper = styled.div`
  position: relative;
  ${media.tablet`
  margin-bottom: 30px;
`}
  ${media.mobile`
    margin-bottom: 12px;
    margin-top: 20px;
`}
`

export default Wrapper
