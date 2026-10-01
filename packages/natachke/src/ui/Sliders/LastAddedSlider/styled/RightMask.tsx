import styled from 'styled-components'
import Mask from './Mask'
import { media } from 'styles/media'

const RightMask = styled(Mask)<{ maskWidth: number }>`
  right: ${({ maskWidth }) => `-${maskWidth}px`};
  background: ${({ theme }) => theme.colors.sliderRightMaskColor};
  ${media.tablet`
    display: none;
  `}
  ${media.mobile`
    display: none;
  `}
`

export default RightMask
