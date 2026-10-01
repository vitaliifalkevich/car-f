import styled from 'styled-components'
import { media } from 'styles/media'

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  grid-gap: 10px;
  margin: 38px 0;
  ${media.mobile`
    margin: 12px 0;
    flex-direction: column;
    align-items: flex-start;
    width: auto;
    grid-gap: 3px;
  `}
`

export default Container
