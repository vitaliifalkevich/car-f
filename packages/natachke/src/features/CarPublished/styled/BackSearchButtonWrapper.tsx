import styled from 'styled-components'
import { media } from 'styles/media'

const BackSearchButtonWrapper = styled.div`
  ${media.mobile`
    a {
      display: block;
      max-width: 316px;
      margin: 0 auto;
      button{
        width: 100%;
      }
    }
`}
`

export default BackSearchButtonWrapper
