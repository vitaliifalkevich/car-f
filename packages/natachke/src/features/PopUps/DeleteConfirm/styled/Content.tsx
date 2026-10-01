import styled from 'styled-components'
import popupPatternBackground from 'assets/img/popupPatternBackground.svg'

const Content = styled.div`
  text-align: center;
  background: url(${popupPatternBackground}) center center no-repeat;
  height: 80%;
  & > div:last-child {
    position: absolute;
    bottom: 22px;
    width: calc(100% - 44px);
    display: flex;
    grid-gap: 12px;
  }
  button {
    width: calc(100% - 44px);
  }
`

export default Content
