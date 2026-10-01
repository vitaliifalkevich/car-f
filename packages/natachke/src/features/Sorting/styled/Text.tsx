import styled from 'styled-components'

const Text = styled.div`
  font-size: 16px;
  line-height: 19px;
  font-family: ${({ theme }) => theme.fonts.ralewayRegular};
  color: ${({ theme }) => theme.colors.textColor};
`

export default Text
