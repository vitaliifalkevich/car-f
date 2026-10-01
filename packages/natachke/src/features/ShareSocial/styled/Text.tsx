import styled from 'styled-components'
import { media } from 'styles/media'

const Text = styled.div`
  font-size: 14px;
  line-height: 16px;
  font-family: ${({ theme }) => theme.fonts.ralewaySemibold};
  color: ${({ theme }) => theme.colors.textColor};
  margin-top: 22px;
  ${media.mobile`
    margin-top: 12px;
  `}
`

export default Text
