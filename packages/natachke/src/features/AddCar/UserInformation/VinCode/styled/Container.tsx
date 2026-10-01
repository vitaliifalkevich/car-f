import styled from 'styled-components'
import { media } from 'styles/media'

const Container = styled.div`
  background: ${({ theme }) => theme.colors.background};
  padding: 25px;
  border-radius: 25px;
  ${media.mobile`
    padding: 20px;
  `}
`

export default Container
