import styled from 'styled-components'
import { media } from 'styles/media'

const Text = styled.div`
  color: ${({ theme }) => theme.colors.textColor};
  font-family: ${({ theme }) => theme.fonts.ralewaySemibold};
  font-size: 15px;
  line-height: 18px;
  padding: 5px 12px;
  ${media.tablet`
    font-size: 14px;
    line-height: 16px;
    padding: 4px 10px;
  `}
`

export default Text
