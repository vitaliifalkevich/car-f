import styled, { css } from 'styled-components'
import { media } from 'styles/media'

const nextStyles = css`
  right: 0;
  transform: translate(50px, -50%);
`
const prevStyles = css`
  left: 0;
  transform: translate(-50px, -50%);
`

const NavigationWrapper = styled.div<{
  direction: 'next' | 'prev'
  top?: string
}>`
  position: absolute;
  top: ${({ top }) => (top ? top : '41%')};
  z-index: 2;
  ${({ direction }) => (direction === 'next' ? nextStyles : prevStyles)};
  ${media.tablet`
    display: none;
  `}
  ${media.mobile`
    display: none;
  `}
`

export default NavigationWrapper
