import styled from 'styled-components'
import { media } from 'styles/media'

const Container = styled.div`
  display: flex;
  align-items: center;
  ${media.mobile`
    margin-left: 10px;
  `}
`

export default Container
