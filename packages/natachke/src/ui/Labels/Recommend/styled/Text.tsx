import styled from 'styled-components'

const Text = styled.div`
  font-size: 10.6676px;
  line-height: 13px;
  color: ${({ theme }) => theme.colors.textColor};
  font-family: ${({ theme }) => theme.fonts.ralewayBold};
`

export default Text
