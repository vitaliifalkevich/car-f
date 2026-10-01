import styled from 'styled-components'
import { media } from 'styles/media'

const FieldsContainer = styled.div`
  display: grid;
  grid-template-columns: 3fr 5fr;
  margin: 20px 0;
  grid-gap: 120px;
  ${media.tablet`
    grid-template-columns: 4fr 5fr;
    grid-gap: 70px;
  `}
  ${media.mobile`
    grid-template-columns: auto;
    grid-gap: 12px;
  `}
`

export default FieldsContainer
