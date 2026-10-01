import styled from 'styled-components'
import { media } from 'styles/media'

const Row = styled.div<{ justify?: string }>`
  display: flex;
  justify-content: ${({ justify }) => (justify ? justify : 'space-between')};
  align-items: center;
  margin: 5px 0;
  ${media.tablet`
    margin: 3px 0;
  `}
  ${media.mobile`
    margin: 0;
  `}
`

export default Row
