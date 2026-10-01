import styled from 'styled-components'
import { media } from 'styles/media'

const CopyrightText = styled.div`
  font-size: 12px;
  line-height: 14px;
  color: ${({ theme }) => theme.colors.copyrightColor};
  font-family: ${({ theme }) => theme.fonts.ralewayRegular};
  ${media.mobile`
    margin-top: 20px;
  `}
`
export default CopyrightText
