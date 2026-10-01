import styled from 'styled-components'

const Description = styled.div`
  font-size: 19px;
  line-height: 22px;
  text-align: center;
  color: ${({ theme }) => theme.colors.descriptionColor};
  font-family: ${({ theme }) => theme.fonts.ralewayBold};
  margin-bottom: 30px;
`

export default Description
