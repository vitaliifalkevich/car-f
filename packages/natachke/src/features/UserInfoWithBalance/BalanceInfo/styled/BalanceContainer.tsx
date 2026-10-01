import styled from 'styled-components'
import { media } from 'styles/media'

const BalanceContainer = styled.div`
  display: flex;
  align-items: center;
  grid-gap: 20px;
  button {
    font-family: ${({ theme }) => theme.fonts.ralewaySemibold};
  }

  ${media.mobile`
     button {
       font-size: 12px;
       line-height: 14px;
     }
  `}
`

export default BalanceContainer
