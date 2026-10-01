import styled from 'styled-components'

const SwitchBackground = styled.div`
  position: relative;
  width: 34px;
  height: 14px;
  border-radius: 10px;
  background-color: ${({ theme }) => theme.colors.trackLine};
`

export default SwitchBackground
