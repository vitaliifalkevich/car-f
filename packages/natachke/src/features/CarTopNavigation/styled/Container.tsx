import styled from 'styled-components'
import { media } from 'styles/media'

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 28px 0 22px;
  ${media.mobile`
    margin: 20px 0 15px;
  `}
`

export default Container
