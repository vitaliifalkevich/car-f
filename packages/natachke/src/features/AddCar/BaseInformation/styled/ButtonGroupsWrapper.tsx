import styled from 'styled-components'
import { media } from 'styles/media'

const ButtonGroupsWrapper = styled.div`
  max-width: 420px;
  width: 100%;
  margin-bottom: 8px;
  position: relative;
  ${media.tablet`
    .success-icon {
      top: 50%;
    }
  `}
  ${media.mobile`
    max-width: 100%;
    margin-bottom: 0;
  `}
`

export default ButtonGroupsWrapper
