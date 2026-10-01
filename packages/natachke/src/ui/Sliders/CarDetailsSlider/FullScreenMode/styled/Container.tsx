import styled from 'styled-components'
import { media } from 'styles/media'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  grid-gap: 20px;
  max-width: 1280px;
  margin: 0 auto;
  width: 70vw;
   ${media.tablet`
    width: 100%;
    grid-gap: 10px;
  `}
  ${media.mobile`
    width: 100%;
    grid-gap: 10px;
  `}
}
`

export default Container
