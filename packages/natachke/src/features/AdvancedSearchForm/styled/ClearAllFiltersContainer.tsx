import styled from 'styled-components'
import { media } from 'styles/media'

const ClearAllFiltersContainer = styled.div`
  display: grid;
  grid-template-columns: 120px repeat(3, 1fr);
  grid-gap: 12px;
  align-items: center;
  margin-top: -5px;
  ${media.tablet`
    grid-template-columns: 120px repeat(2, 1fr);
  `}
  ${media.mobile`
    grid-template-columns: auto;
  `}
`

export default ClearAllFiltersContainer
