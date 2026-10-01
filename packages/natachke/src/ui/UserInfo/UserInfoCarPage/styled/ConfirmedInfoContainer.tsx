import styled from 'styled-components'
import { media } from 'styles/media'

const ConfirmedInfoContainer = styled.div`
  margin: 20px 0 0;
  display: grid;
  grid-template-columns: 18px auto;
  grid-gap: 5px 4px;
  ${media.mobile`
    margin: 10px 0 0;
  `}
`

export default ConfirmedInfoContainer
