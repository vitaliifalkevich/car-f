import styled from 'styled-components'

const CopyrightLinkWrapper = styled.div`
  a {
    font-size: 12px;
    line-height: 14px;
    color: ${({ theme }) => theme.colors.copyrightColor};
    font-family: ${({ theme }) => theme.fonts.ralewayRegular};
    text-decoration: underline;
    &:hover {
      text-decoration: none;
    }
  }
`

export default CopyrightLinkWrapper
