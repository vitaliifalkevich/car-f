import styled from 'styled-components'
import { media } from 'styles/media'

const Description = styled.div`
  font-size: 13px;
  line-height: 15px;
  font-family: ${({ theme }) => theme.fonts.ralewayRegular};
  color: ${({ theme }) => theme.colors.description};
  display: flex;
  align-items: center;
  ${media.mobile`
    align-items: flex-start;
    flex-direction: column;
  `}
`

export default Description
