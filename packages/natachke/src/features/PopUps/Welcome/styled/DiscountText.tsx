import styled from 'styled-components'

const DiscountText = styled.div`
  font-size: 19px;
  line-height: 22px;
  color: ${({ theme }) => theme.colors.textColor};
  font-family: ${({ theme }) => theme.fonts.ralewayBold};
  text-transform: uppercase;
  margin-top: 5px;
`

export default DiscountText
