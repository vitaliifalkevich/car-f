import styled from 'styled-components'
import { media } from 'styles/media'

const Content = styled.div`
  display: flex;
  justify-content: flex-start;
  grid-gap: 200px;
  max-width: 925px;
  margin: 0 auto;
  ${media.tablet`
    grid-gap: 100px;
  `}
  ${media.mobile`
    display: grid;
    grid-template-columns: repeat(2,1fr);
  `}
`

export default Content
