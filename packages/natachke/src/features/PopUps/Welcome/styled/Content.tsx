import styled from 'styled-components'
import { media } from 'styles/media'

const Content = styled.div`
  text-align: center;
  position: absolute;
  bottom: 22px;
  width: calc(100% - 44px);
  button {
    width: 100%;
    margin-top: 20px;
    height: 45px;
  }
  ${media.mobile`
    bottom: 27%;
    transform: translate(0, 50%);
  `}
`

export default Content
