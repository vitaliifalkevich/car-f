import styled from 'styled-components'

const Text = styled.div`
  font-family: ${({ theme }) => theme.fonts.ralewayRegular};
  font-size: 14px;
  line-height: 16px;
  color: ${({ theme }) => theme.colors.textColor};
`

export default Text
