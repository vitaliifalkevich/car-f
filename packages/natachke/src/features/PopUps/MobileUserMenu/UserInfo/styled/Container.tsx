import styled from 'styled-components'
import { media } from 'styles/media'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 12px;
  & > div:first-child {
    display: flex;
  }

  ${media.tablet`
    margin-top: 3px;
    margin-bottom: 12px;
  `}

  ${media.mobile`
    margin-top: 3px;
    margin-bottom: 12px;
  `}
`

export default Container
