import styled from 'styled-components'

const Mask = styled.div<{ maskWidth: number }>`
  height: 100%;
  z-index: 1;
  position: absolute;
  top: 0;
  width: ${({ maskWidth }) => `${maskWidth + 44}px`};
`

export default Mask
