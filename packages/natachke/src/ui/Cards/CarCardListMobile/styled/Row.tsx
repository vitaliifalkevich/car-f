import styled from 'styled-components'

const Row = styled.div<{ justify?: string }>`
  display: flex;
  justify-content: ${({ justify }) => (justify ? justify : 'space-between')};
  align-items: center;
  margin: 0;
`

export default Row
