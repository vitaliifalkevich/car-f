import styled from 'styled-components'
import { media } from 'styles/media'

const MobileContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, auto);
  margin-top: 12px;
  grid-gap: 3px;
  ${media.mobile`
    display: flex;
    justify-content: space-between;
  `}
`

export default MobileContainer
