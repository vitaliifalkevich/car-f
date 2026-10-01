import styled from 'styled-components'

const Description = styled.div`
  font-size: 20px;
  line-height: 23px;
  color: ${({ theme }) => theme.colors.textColor};
  font-family: ${({ theme }) => theme.fonts.ralewayBold};
`

export default Description
