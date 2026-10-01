import styled from 'styled-components'
import { media } from 'styles/media'

const TechText = styled.div`
  font-size: 14px;
  line-height: 16px;
  color: ${({ theme }) => theme.colors.description};
  font-family: ${({ theme }) => theme.fonts.ralewayRegular};
  margin-left: 4.5px;
  ${media.mobile`
    font-size: 12px;
    line-height: 12px;
  `}
`

export default TechText
