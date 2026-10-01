import styled from 'styled-components'
import { media } from 'styles/media'

const Container = styled.div`
  margin: 10px 0;
  ${media.mobile`
    margin: -10px 0 10px;
  `}
`

export default Container
