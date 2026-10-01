import styled from 'styled-components'

const Line = styled.div`
  height: 27px;
  width: 1px;
  background: ${({ theme }) => theme.colors.dividedLineColor};
  margin-right: -5px;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
`

export default Line
