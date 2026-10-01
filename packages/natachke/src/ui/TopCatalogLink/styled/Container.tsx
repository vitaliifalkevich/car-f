import styled from 'styled-components'
import { media } from 'styles/media'

const Container = styled.div`
  line-height: 16px;
  margin-bottom: 20px;
  a {
    display: flex;
    width: fit-content;
    align-items: center;
    color: ${({ theme }) => theme.colors.linkColor};
    font-family: ${({ theme }) => theme.fonts.ralewayBold};
    text-decoration: underline;
    grid-gap: 12px;
    font-size: 14px;
    font-height: 16px;

    &:hover {
      text-decoration: none;
    }
  }
  ${media.mobile`
    margin-bottom: 0;
  `}
`

export default Container
