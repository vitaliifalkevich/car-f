import styled from 'styled-components'
import popupPatternBackground from 'assets/img/popupPatternBackground.svg'

const Content = styled.div`
  text-align: center;
  background: url(${popupPatternBackground}) center center no-repeat;
  height: 80%;
  button {
    width: calc(100% - 44px);
    position: absolute;
    bottom: 22px;
  }
`

export default Content
