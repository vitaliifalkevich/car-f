import styled from 'styled-components'
import { media } from 'styles/media'

const Text = styled.div`
  font-size: 15px;
  line-height: 18px;
  font-family: ${({ theme }) => theme.fonts.ralewayRegular};
  color: ${({ theme }) => theme.colors.textColor};
  ${media.mobile`
    font-size: 14px;
    line-height: 14px;
  `}
`

export default Text
