import styled from 'styled-components'
import { media } from 'styles/media'

const Content = styled.div`
  max-width: 1165px;
  display: flex;
  margin: 0 auto;
  height: 100%;
  align-items: center;
  justify-content: space-between;
  padding: 0 25px;
  & > div {
    display: flex;
    align-items: center;
  }
  ${media.tablet`
    max-width: 1035px;
  `}
`

export default Content
