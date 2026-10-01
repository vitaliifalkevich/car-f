import styled from 'styled-components'
import { media } from 'styles/media'

const Container = styled.div`
  margin: 30px auto;
  ${media.mobile`
    margin: 12px auto 0;
  `}
`

export default Container
