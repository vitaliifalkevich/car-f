import styled from 'styled-components'
import { media } from 'styles/media'

const Card = styled.div`
  display: grid;
  grid-template-columns: auto 250px;
  align-items: flex-start;
  grid-gap: 10px;
  ${media.tablet`
    grid-template-columns: auto;
  `}
`

export default Card
