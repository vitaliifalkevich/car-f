import styled from 'styled-components'
import { media } from 'styles/media'

const Row = styled.div`
  display: flex;
  align-items: center;
  grid-gap: 20px;
  margin-bottom: 20px;
  & > div > div {
    width: 225px;
  }
  ${media.mobile`
    margin-bottom: 10px;
    flex-direction: column;
    & > div, & > div > div {
      width: 100%;
    }
  `}
`

export default Row
