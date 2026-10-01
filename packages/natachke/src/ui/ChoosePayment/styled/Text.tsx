import styled from 'styled-components'

const Text = styled.div`
  font-size: 13px;
  line-height: 15px;
  font-family: ${({ theme }) => theme.fonts.ralewayRegular};
  color: ${({ theme }) => theme.colors.textColor};
  margin-top: 3px;
`

export default Text
