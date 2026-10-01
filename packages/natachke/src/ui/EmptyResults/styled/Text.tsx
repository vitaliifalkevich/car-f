import styled from 'styled-components'

const Text = styled.div`
  color: ${({ theme }) => theme.colors.textColor};
  font-family: ${({ theme }) => theme.fonts.ralewayRegular};
  font-size: 14px;
  line-height: 16px;
  text-align: center;
`

export default Text
