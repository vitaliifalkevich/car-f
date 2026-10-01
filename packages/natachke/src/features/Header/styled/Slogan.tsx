import styled from 'styled-components'

const Slogan = styled.h1`
  color: ${({ theme }) => theme.colors.mainColor};
  font-size: 18px;
  line-height: 21px;
  margin-left: 25px;
  font-family: ${({ theme }) => theme.fonts.ralewayRegular};
`

export default Slogan
