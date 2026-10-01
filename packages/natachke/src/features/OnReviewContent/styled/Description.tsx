import styled from 'styled-components'

const Description = styled.div`
  font-size: 18px;
  line-height: 21px;
  color: ${({ theme }) => theme.colors.descriptionColor};
  font-family: ${({ theme }) => theme.fonts.ralewayBold};
  text-transform: uppercase;
  text-align: center;
  margin-bottom: 5px;
`

export default Description
