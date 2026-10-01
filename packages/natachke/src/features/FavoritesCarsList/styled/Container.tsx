import styled from 'styled-components'
import { media } from 'styles/media'

const Container = styled.div`
  ${media.mobile`
    & > div:first-child {
    & > div:first-child {
      margin-top: 0;
    }
  }
  `}
`

export default Container
