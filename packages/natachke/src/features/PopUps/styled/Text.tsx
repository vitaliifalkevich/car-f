import styled from 'styled-components'

const Text = styled.div`
  color: ${({ theme }) => theme.colors.textColor};
  font-family: ${({ theme }) => theme.fonts.ralewayRegular};
  font-size: 13px;
  line-height: 15px;
  text-align: center;
  margin-top: 12px;
  margin-bottom: 12px;
`

export default Text
