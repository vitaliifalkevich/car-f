import styled from 'styled-components'

const Price = styled.div`
  font-size: 18px;
  line-height: 24px;
  color: ${({ theme }) => theme.colors.priceColor};
  font-family: ${({ theme }) => theme.fonts.ralewayBold};
`

export default Price
