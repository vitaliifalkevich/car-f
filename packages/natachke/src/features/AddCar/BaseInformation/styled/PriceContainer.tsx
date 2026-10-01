import styled from 'styled-components'
import { media } from 'styles/media'

const PriceContainer = styled.div`
  max-width: 225px;
  position: relative;
  .success-icon {
    top: 65%;
  }
  ${media.mobile`
    max-width: 100%;
  `}
`

export default PriceContainer
