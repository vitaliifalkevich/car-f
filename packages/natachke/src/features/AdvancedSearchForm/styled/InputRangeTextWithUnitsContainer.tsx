import styled from 'styled-components'
import { media } from 'styles/media'

const InputRangeTextWithUnitsContainer = styled.div`
  display: grid;
  grid-template-columns: 120px auto;
  grid-gap: 12px;
  margin: 12px 0;
  ${media.mobile`
    grid-template-columns: auto;
  `}
`

export default InputRangeTextWithUnitsContainer
