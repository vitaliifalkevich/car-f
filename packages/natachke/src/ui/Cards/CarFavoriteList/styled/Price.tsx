import styled from 'styled-components'

const Price = styled.div`
  font-size: 21px;
  line-height: 21px;
  color: ${({ theme }) => theme.colors.priceColor};
  font-family: ${({ theme }) => theme.fonts.ralewayBold};
`

export default Price
