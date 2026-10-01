import styled from 'styled-components'
import { media } from 'styles/media'

const TwoColumnsContainer = styled.div`
  margin: 0 auto;
  display: grid;
  grid-template-columns: 226px calc(100% - 226px - 33px);
  grid-gap: 33px;
  ${media.mobile`
    display: flex;
    flex-direction: column-reverse;
    grid-gap: 10px;
  `}
`

export default TwoColumnsContainer
