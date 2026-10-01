import styled from 'styled-components'
import { media } from 'styles/media'

const Wrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  min-height: 38px;
  ${media.mobile`
    justify-content: space-between;
    margin: 10px 0;
    flex-direction: column;
    align-items: flex-start;
    min-height: 70px;
    & > div {
      width: 100%;
    }
  `}
`

export default Wrapper
