import styled from 'styled-components'
import { media } from 'styles/media'

const AddHiddenOptionButtonWrapper = styled.div`
  display: grid;
  grid-template-columns: 120px auto;
  grid-gap: 15px;
  ${media.mobile`
    grid-template-columns: auto;
  `}
`

export default AddHiddenOptionButtonWrapper
