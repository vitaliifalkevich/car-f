import styled from 'styled-components'
import { media } from 'styles/media'

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  grid-gap: 25px;
  ${media.mobile`
    grid-template-columns: 1fr;
    grid-gap: 22px;
  `}
`

export default Container
