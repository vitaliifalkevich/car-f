import styled from 'styled-components'
import { media } from 'styles/media'

const PriceContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  grid-gap: 5px;
  ${media.mobile`
    width: 100%;
    justify-content: space-between;
  `}
`

export default PriceContainer
