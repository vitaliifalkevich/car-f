import styled from 'styled-components'
import { media } from 'styles/media'

const ContentWrapper = styled.div`
  position: relative;
  height: 100%;
  ${media.mobile`
    height: initial;
  `}
`

export default ContentWrapper
