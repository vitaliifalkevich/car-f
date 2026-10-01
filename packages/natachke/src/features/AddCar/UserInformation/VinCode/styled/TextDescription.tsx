import styled from 'styled-components'

const TextDescription = styled.div`
  font-size: 13px;
  line-height: 15px;
  text-align: center;
  font-family: ${({ theme }) => theme.fonts.ralewayRegular};
  color: ${({ theme }) => theme.colors.textColor};
`

export default TextDescription
