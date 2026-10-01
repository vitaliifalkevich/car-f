import styled from 'styled-components'
import { media } from 'styles/media'

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 12px;

  ${media.mobile`
    display: block;
  `}
`

export default Container
