import styled from 'styled-components'
import { media } from 'styles/media'

const Title = styled.h2`
  font-size: 43px;
  line-height: 100%;
  font-family: ${({ theme }) => theme.fonts.ralewayBold};
  color: ${({ theme }) => theme.colors.titleColor};
  margin: 0;
  ${media.tablet`
    font-size: 30px;
    line-height: 35px;
  `}
  ${media.mobile`
    font-size: 24px;
    line-height: 100%;
  `}
`

export default Title
