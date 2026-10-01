import styled from 'styled-components'

const HR = styled.hr`
  width: 100%;
  max-width: 925px;
  margin: 25px auto 15px;
  border: 0;
  background: ${({ theme }) => theme.colors.lineGradient};
  height: 1px;
`

export default HR
