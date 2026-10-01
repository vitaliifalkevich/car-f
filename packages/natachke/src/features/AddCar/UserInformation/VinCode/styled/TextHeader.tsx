import styled from 'styled-components'

const TextHeader = styled.div`
  color: ${({ theme }) => theme.colors.headerColor};
  font-family: ${({ theme }) => theme.fonts.ralewayBold};
  font-size: 18px;
  line-height: 21px;
`

export default TextHeader
