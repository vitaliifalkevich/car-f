import styled from 'styled-components'
import { media } from 'styles/media'

const LinkWrapper = styled.div`
  a {
    font-size: 12px;
    line-height: 14px;
    color: ${({ theme }) => theme.colors.textColor};
    font-family: ${({ theme }) => theme.fonts.ralewayRegular};
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
  }
  ${media.mobile`
    line-height: 24px;
  `}
`

export default LinkWrapper
