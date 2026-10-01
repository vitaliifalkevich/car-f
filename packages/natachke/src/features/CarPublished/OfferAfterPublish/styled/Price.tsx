import styled from 'styled-components'

const Price = styled.div`
  margin: 26px 0 28px;
  font-size: 29px;
  line-height: 34px;
  font-family: ${({ theme }) => theme.fonts.ralewayBold};
  color: ${({ theme }) => theme.colors.titleColor};
  text-align: center;
`

export default Price
