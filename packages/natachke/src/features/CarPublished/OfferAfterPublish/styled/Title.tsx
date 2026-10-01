import styled from 'styled-components'
import { media } from 'styles/media'

const Title = styled.div`
  font-size: 28px;
  line-height: 33px;
  font-family: ${({ theme }) => theme.fonts.ralewayBold};
  color: ${({ theme }) => theme.colors.titleColor};
  ${media.mobile`
    font-size: 19px;
    line-height: 21px;
    text-align: center;
  `}
`

export default Title
