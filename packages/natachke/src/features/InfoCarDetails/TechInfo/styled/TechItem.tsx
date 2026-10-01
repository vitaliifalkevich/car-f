import styled from 'styled-components'
import { media } from 'styles/media'

const TechItem = styled.div`
  display: flex;
  align-items: center;
  ${media.mobile`
    margin: 6px 0;
  `}
`

export default TechItem
