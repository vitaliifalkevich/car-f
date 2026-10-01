import styled from 'styled-components'
import { media } from 'styles/media'

const ListContainer = styled.div`
  margin-top: 32px;
  position: relative;
  ${media.mobile`
    margin-top: 12px;
  `}
`

export default ListContainer
