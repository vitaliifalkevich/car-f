import styled from 'styled-components'

const Text = styled.div`
  font-size: 15px;
  line-height: 18px;
  font-family: ${({ theme }) => theme.fonts.ralewayRegular};
  color: ${({ theme }) => theme.colors.textColor};
`

export default Text
