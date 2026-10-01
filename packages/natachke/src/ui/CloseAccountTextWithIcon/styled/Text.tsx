import styled from 'styled-components'

const Text = styled.div`
  font-size: 13px;
  line-height: 15px;
  color: ${({ theme }) => theme.colors.textColor};
  font-family: ${({ theme }) => theme.fonts.ralewayRegular};
  cursor: pointer;
  text-decoration: underline;
  &:hover {
    text-decoration: none;
  }
`

export default Text
