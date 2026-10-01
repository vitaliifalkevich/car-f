import styled from 'styled-components'
import { media } from 'styles/media'

const FieldsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  margin: 20px 0;
  grid-gap: 150px;
  ${media.tablet`
     grid-gap: 70px;
  `}
  ${media.mobile`
    grid-template-columns: auto;
    grid-gap: 12px;
  `}
`

export default FieldsContainer
