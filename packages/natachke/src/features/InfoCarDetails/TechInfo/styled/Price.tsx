import styled from 'styled-components'

const Price = styled.div`
  font-size: 16px;
  line-height: 18px;
  color: ${({ theme }) => theme.colors.priceMobileColor};
  font-family: ${({ theme }) => theme.fonts.ralewayBold};
`

export default Price
