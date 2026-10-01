import styled from 'styled-components'
import { media } from 'styles/media'

const SummaryErrorsContainer = styled.div`
  margin-top: 12px;
  width: 100%;
  & > div {
    position: initial;
  }
  ${media.mobile`
    & > div {
    text-align: center;
    }
  `}
`

export default SummaryErrorsContainer
