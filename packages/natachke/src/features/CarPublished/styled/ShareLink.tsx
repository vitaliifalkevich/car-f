import styled from 'styled-components'

const ShareLink = styled.a`
  font-size: 13px;
  line-height: 15px;
  font-family: ${({ theme }) => theme.fonts.ralewayBold};
  text-decoration: underline;
  &:hover {
    text-decoration: none;
  }
`

export default ShareLink
