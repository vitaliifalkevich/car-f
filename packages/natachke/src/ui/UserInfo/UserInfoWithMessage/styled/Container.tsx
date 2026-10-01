import styled from 'styled-components'
import { media } from 'styles/media'

const Container = styled.div`
  border-radius: 16px;
  background: ${({ theme }) => theme.colors.blockBackground};
  padding: 16px;
  min-height: 180px;
  ${media.tablet`
    border-radius: 8px;
    min-height: auto;
  `}
  ${media.mobile`
    border-radius: 8px;
    min-height: auto;
  `}
`

export default Container
