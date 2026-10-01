import styled from 'styled-components'
import { media } from 'styles/media'

const ButtonGroupsWrapper = styled.div`
  width: 100%;
  margin-bottom: 8px;
  max-width: 390px;
  ${media.tablet`
    max-width: 450px;
  `}
  ${media.mobile`
    max-width: 100%;
    margin-bottom: 0;
  `}
`

export default ButtonGroupsWrapper
