import styled from 'styled-components'

const ModalOverlay = styled.div`
  position: fixed;
  width: 100vw;
  top: 0;
  z-index: 1100;
  left: 0;
  height: 100vh;
  background: ${props => props.theme.colors.maskBackground};
  backdrop-filter: blur(12px);
`

export default ModalOverlay
