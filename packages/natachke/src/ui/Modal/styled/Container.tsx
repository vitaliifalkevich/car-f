import styled, { css } from 'styled-components'
import { media } from 'styles/media'

interface ContainerProps {
  width?: string
  height?: string
  padding?: string
  saveSizesInTablet?: boolean
  fullScreen?: boolean
}

const fullScreenMode = css`
  width: 100vw;
  height: 100vh;
`
const defaultMode = css<ContainerProps>`
  width: ${({ width }) => (width ? width : '100%')};
  height: ${({ height }) => (height ? height : 'auto')};
  max-height: 100%;
  border-radius: 8px;
  ${media.tablet`
    border-radius: ${({ saveSizesInTablet }) =>
      saveSizesInTablet ? '8px' : '0'};
  `}
  ${media.mobile`
    border-radius: 0;
  `}
`

const Container = styled.div<ContainerProps>`
  background: ${({ theme }) => theme.colors.backgroundColor};
  position: fixed;
  left: 50%;
  top: 50%;
  z-index: 10001;
  transform: translate(-50%, -50%);
  padding: ${({ padding }) => (padding ? padding : '22px')};
  box-sizing: border-box;
  box-shadow: 0px 8px 50px ${({ theme }) => theme.colors.modalShadow};
  ${({ fullScreen }) => (fullScreen ? fullScreenMode : defaultMode)}
  overflow-y: auto;

  &::-webkit-scrollbar {
    width: 0;
    height: 0;
  }

  &::-webkit-scrollbar-thumb {
    background: transparent;
  }

  &::scrollbar-track {
    background: transparent;
  }

  &::-webkit-scrollbar-track {
    background: transparent;
  }

  ${media.tablet`
    ${({ saveSizesInTablet }) =>
      saveSizesInTablet ? '' : `width: 100%; height: 100%`};
    overflow-y: auto;
  `}

  ${media.mobile`
    width: 100%;
    height: 100%;
    overflow-y: auto;
  `}
`

export default Container
