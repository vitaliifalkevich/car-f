import styled from 'styled-components'
import { media } from 'styles/media'

const MakeNoteWrapper = styled.div`
  & > div {
    margin: 0;
  }
  ${media.tablet`
    margin-top: 12px;
  `}
`

export default MakeNoteWrapper
