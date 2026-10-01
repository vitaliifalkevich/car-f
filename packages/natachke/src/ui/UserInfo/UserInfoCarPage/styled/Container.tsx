import styled from 'styled-components'
import { media } from 'styles/media'

const Container = styled.div`
  border-radius: 24px;
  background: ${({ theme }) => theme.colors.blockBackground};
  padding: 30px 20px;
  margin-bottom: 12px;
  margin-top: 38px;
  ${media.mobile`
    margin-top: 0;
    padding: 20px 15px;
    border-radius: 8px;
  `}
`

export default Container
