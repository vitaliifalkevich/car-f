import styled from 'styled-components'
import Mask from './Mask'
import { media } from 'styles/media'

const LeftMask = styled(Mask)<{ maskWidth: number }>`
  left: ${({ maskWidth }) => `-${maskWidth}px`};
  background: ${({ theme }) => theme.colors.sliderLeftMaskColor};
  ${media.tablet`
    display: none;
  `}
  ${media.mobile`
    display: none;
  `}
`

export default LeftMask
