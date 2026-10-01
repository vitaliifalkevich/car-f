import styled from 'styled-components'

const Text = styled.div`
  font-size: 12px;
  line-height: 14px;
  font-family: ${({ theme }) => theme.fonts.ralewayRegular};
  color: ${({ theme }) => theme.colors.textColor};
`

export default Text
