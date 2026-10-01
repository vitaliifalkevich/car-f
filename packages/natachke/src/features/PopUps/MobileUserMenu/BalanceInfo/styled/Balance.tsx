import styled from 'styled-components'

const Balance = styled.div`
  font-size: 18px;
  line-height: 21px;
  color: ${({ theme }) => theme.colors.balanceColor};
  font-family: ${({ theme }) => theme.fonts.ralewayBold};
`

export default Balance
