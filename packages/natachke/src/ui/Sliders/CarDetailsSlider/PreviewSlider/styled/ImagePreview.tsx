import styled from 'styled-components'
import { media } from 'styles/media'

const ImagePreview = styled.img<{ isActive: boolean }>`
  border-radius: 8.56px;
  position: relative;
  cursor: pointer;
  height: 70px;
  object-fit: cover;
  border: 2px solid
    ${({ isActive, theme }) =>
      isActive ? theme.colors.activeMiniPreviewColor : 'transparent'};
  ${media.mobile`
    height: 13vw;
    min-height: 50px;
  `}
`

export default ImagePreview
