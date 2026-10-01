import styled from 'styled-components'

const Price = styled.div`
  font-size: 28px;
  line-height: 28px;
  color: ${({ theme }) => theme.colors.titleColor};
  font-family: ${({ theme }) => theme.fonts.ralewayBold};
`

export default Price
