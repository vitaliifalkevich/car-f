import styled from 'styled-components'
import { media } from 'styles/media'

const Container = styled.div`
  display: flex;
  grid-gap: 7px 25px;
  margin: 10px 0;
  flex-wrap: wrap;

  ${media.mobile`
    margin: 6px 0 0 0;
    justify-content: space-between;
    width: 100%;
  `}
`

export default Container
