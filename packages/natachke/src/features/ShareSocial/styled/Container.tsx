import styled from 'styled-components'
import { media } from 'styles/media'

const Container = styled.div`
  display: flex;
  grid-gap: 20px;
  margin: 9px 0 22px;
  ${media.mobile`
    margin: 9px 0 18px;
  `}
`

export default Container
