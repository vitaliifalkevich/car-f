import styled from 'styled-components'
import { media } from 'styles/media'

const Title = styled.div`
  font-size: 16px;
  line-height: 19px;
  color: ${({ theme }) => theme.colors.textColor};
  font-family: ${({ theme }) => theme.fonts.ralewayBold};
  ${media.mobile`
    margin-top: 25px;
  `}
`

export default Title
