import styled from 'styled-components'
import { media } from 'styles/media'
import trueCarDecorative from 'assets/img/trueCarDecorative.svg'

const Wrapper = styled.div`
  background: ${({ theme }) => theme.colors.blockBackground}
    url(${trueCarDecorative}) no-repeat;
  padding: 50px 0 54px;
  background-position: center top;
  ${media.tablet`
     padding: 40px 0 44px;
  `}
  ${media.mobile`
     padding: 20px 0 10px;
  `}
`

export default Wrapper
