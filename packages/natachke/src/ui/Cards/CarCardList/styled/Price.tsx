import styled from 'styled-components'
import { media } from 'styles/media'

const Price = styled.div`
  font-size: 21px;
  line-height: 21px;
  color: ${({ theme }) => theme.colors.priceColor};
  font-family: ${({ theme }) => theme.fonts.ralewayBold};
  ${media.mobile`
    font-size: 15px;
    line-height: 18px;
  `}
`

export default Price
