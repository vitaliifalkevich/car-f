import styled from 'styled-components'
import { media } from 'styles/media'

const Container = styled.div`
  position: relative;
  width: 100%;
  max-width: 540px;
  height: 660px;
  margin: 0 auto -50px;
  ${media.mobile`
    height: 550px;
  `}
`

export default Container
