import styled from 'styled-components'
import { media } from 'styles/media'

const Title = styled.div`
  font-size: 18px;
  line-height: 21px;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.carTitle};
  font-family: ${({ theme }) => theme.fonts.ralewayBold};
  overflow: hidden;
  cursor: pointer;
  white-space: nowrap;
  text-overflow: ellipsis;
  &:hover {
    text-decoration: underline;
  }
  ${media.mobile`
    font-size: 15px;
    line-height: 15px;
  `}
`

export default Title
