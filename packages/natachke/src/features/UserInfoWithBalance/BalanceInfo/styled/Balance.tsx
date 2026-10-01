import styled from 'styled-components'
import { media } from 'styles/media'

const Balance = styled.div`
  font-size: 24px;
  line-height: 28px;
  color: ${({ theme }) => theme.colors.balanceColor};
  font-family: ${({ theme }) => theme.fonts.ralewayBold};

  ${media.mobile`
    font-size: 18px;
    line-height: 21px;
  `}
`

export default Balance
