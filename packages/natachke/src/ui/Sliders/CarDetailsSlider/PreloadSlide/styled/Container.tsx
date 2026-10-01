import styled from 'styled-components'
import { media } from 'styles/media'

const Container = styled.div`
  height: 440px;
  margin-bottom: 10px;
  ${media.tablet`
    height: 317px;
  `}
  ${media.mobile`
    height:auto;
  `}
`

export default Container
