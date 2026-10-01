import styled from 'styled-components'
import { media } from 'styles/media'

const NoteContainer = styled.div`
  & > div {
    margin-bottom: 0;
    margin-top: 12px;
  }
  ${media.mobile`
    & > div {
      margin-bottom: 12px;
      margin-top: 0;
    }
  `}
`

export default NoteContainer
