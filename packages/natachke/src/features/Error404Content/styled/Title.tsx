import styled from 'styled-components'

const Title = styled.h1`
  font-size: 150px;
  line-height: 176px;
  font-family: ${({ theme }) => theme.fonts.ralewayBold};
  color: ${({ theme }) => theme.colors.titleColor};
  text-align: center;
  margin: 0 auto;
`

export default Title
