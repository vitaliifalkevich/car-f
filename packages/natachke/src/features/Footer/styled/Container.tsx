import styled from 'styled-components'
import { media } from 'styles/media'

const Container = styled.div`
  padding: 28px 25px 16px;
  background: ${({ theme }) => theme.colors.backgroundColor};
  margin-top: 50px;
  width: 100%;
  ${media.mobile`
     padding: 28px 15px 16px;
  `}
`

export default Container
