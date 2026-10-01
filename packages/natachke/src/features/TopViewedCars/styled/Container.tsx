import styled from 'styled-components'
import { media } from 'styles/media'

const Container = styled.div`
  margin: 50px 0;
  ${media.mobile`
    margin: 20px 0;
  `}
`

export default Container
