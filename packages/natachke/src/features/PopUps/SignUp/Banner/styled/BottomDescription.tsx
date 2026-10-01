import styled from 'styled-components'
import { media } from 'styles/media'

const BottomDescription = styled.div`
  font-size: 21px;
  line-height: 25px;
  color: ${({ theme }) => theme.colors.textColor};
  font-family: ${({ theme }) => theme.fonts.ralewayBold};
  margin-top: 110px;

  ${media.mobile`
    margin-top: 20px;
  `}
`

export default BottomDescription
