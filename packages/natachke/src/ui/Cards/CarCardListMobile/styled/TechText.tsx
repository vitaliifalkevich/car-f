import styled from 'styled-components'

const TechText = styled.div`
  font-size: 14px;
  line-height: 15px;
  color: ${({ theme }) => theme.colors.description};
  font-family: ${({ theme }) => theme.fonts.ralewayRegular};
  margin-left: 4.5px;
`

export default TechText
