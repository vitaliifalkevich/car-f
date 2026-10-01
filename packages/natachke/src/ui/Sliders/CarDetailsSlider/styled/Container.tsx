import styled from 'styled-components'
import { media } from 'styles/media'

const Container = styled.div`
  position: relative;
  width: 100%;
  ${media.mobile`
    margin: 15px -15px 0;
    width: calc(100% + 30px);
  `}
`

export default Container
