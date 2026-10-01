import styled, { css } from 'styled-components'
import { media } from 'styles/media'

const nextStyles = css`
  right: 7%;
  transform: translate(50px, -50%);
  border-radius: 8.54px 0 0 8.54px;
  ${media.tablet`
    right: 9%;
  `}
`
const prevStyles = css`
  left: 7%;
  transform: translate(-50px, -50%);
  border-radius: 0 8.54px 8.54px 0;
  ${media.tablet`
    left: 9%;
  `}
`

const NavigationWrapper = styled.div<{ direction: 'next' | 'prev' }>`
  position: absolute;
  top: 50%;
  z-index: 2;
  button {
    background: ${({ theme }) => theme.colors.buttonBackground};
    border-radius: 0 8.54px 8.54px 0;
    width: 40px;
  }
  ${({ direction }) => (direction === 'next' ? nextStyles : prevStyles)};
  ${media.mobile`
    display: none;
  `}
`

export default NavigationWrapper
