import styled from 'styled-components'
import { media } from 'styles/media'

const AddNewBrandWrapper = styled.div`
  display: grid;
  grid-template-columns: 120px auto;
  grid-gap: 12px;
  margin-top: -12px;
  ${media.mobile`
    grid-template-columns: auto;
  `}
`

export default AddNewBrandWrapper
