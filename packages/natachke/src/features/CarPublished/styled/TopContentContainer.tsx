import styled from 'styled-components'
import { media } from 'styles/media'

const TopContentContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  grid-gap: 60px;
  margin-bottom: 30px;
  a {
    display: inline-block;
  }

  ${media.mobile`
    flex-direction: column;
    grid-gap: 30px;
  `}
`

export default TopContentContainer
