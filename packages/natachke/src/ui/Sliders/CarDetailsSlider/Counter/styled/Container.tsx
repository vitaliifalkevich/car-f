import styled from 'styled-components'
import { media } from 'styles/media'

const Container = styled.div`
  display: flex;
  align-items: center;
  border-radius: 8.57px;
  padding: 0 12px;
  background: ${({ theme }) => theme.colors.buttonBackground};
  position: absolute;
  bottom: 27px;
  left: 16px;
  height: 33px;
  ${media.tablet`
    padding: 0 9px;
    height: 28px;
  `}
  ${media.mobile`
    padding: 0 9px;
    height: 28px;
  `}
`

export default Container
