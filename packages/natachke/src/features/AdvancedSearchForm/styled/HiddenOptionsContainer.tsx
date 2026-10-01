import styled from 'styled-components'
import { media } from 'styles/media'

const HiddenOptionsContainer = styled.div`
  display: grid;
  grid-template-columns: 120px repeat(3, 1fr);
  grid-gap: 0 12px;
  margin: 12px 0 0;
  align-items: flex-start;
  ${media.tablet`
    grid-template-columns: 120px repeat(2, 1fr);
    width: 96%;
  `}
  ${media.mobile`
    grid-template-columns: auto;
    grid-gap: 12px;
    label {
      margin: 0;
    }
  `}
`

export default HiddenOptionsContainer
