import styled from 'styled-components'
import { media } from 'styles/media'

const Title = styled.h1`
  color: ${({ theme }) => theme.colors.titleColor};
  font-family: ${({ theme }) => theme.fonts.ralewayBold};
  font-size: 28px;
  line-height: 28px;
  margin: 0 auto;

  ${media.mobile`
    font-size: 19px;
    line-height: 22px;
  `}
`

export default Title
