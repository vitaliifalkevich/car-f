import styled from 'styled-components'
import { media } from 'styles/media'

const Container = styled.div`
  width: 100%;
  height: 60px;
  background: ${({ theme }) => theme.colors.backgroundColor};
  ${media.mobile`
    height: 45px;
  `}
`

export default Container
