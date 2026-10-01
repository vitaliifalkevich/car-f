import styled from 'styled-components'
import { media } from 'styles/media'

const Canvas = styled.canvas`
  ${media.mobile`
    max-height: 500px;
  `}
`

export default Canvas
