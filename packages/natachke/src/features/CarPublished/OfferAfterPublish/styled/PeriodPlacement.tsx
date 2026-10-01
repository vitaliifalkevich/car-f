import styled from 'styled-components'

const PeriodPlacement = styled.div`
  font-size: 15px;
  line-height: 18px;
  font-family: ${({ theme }) => theme.fonts.ralewayBold};
  color: ${({ theme }) => theme.colors.descriptionColor};
  margin: 30px auto;
`

export default PeriodPlacement
