import styled from 'styled-components'
import { media } from 'styles/media'

const Wrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  margin: 5px 0;
  position: relative;
  z-index: 1;
  ${media.mobile`
    justify-content: space-between;
    margin: 10px 0 0;
  `}
`

export default Wrapper
