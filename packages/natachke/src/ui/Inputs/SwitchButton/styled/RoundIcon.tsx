import styled from 'styled-components'

const RoundIcon = styled.div`
  height: 20px;
  width: 20px;
  background: ${({ theme }) => theme.colors.defaultIconColor};
  box-shadow: ${({ theme }) => theme.colors.shadow};
  border-radius: 50%;
  margin-top: -3px;
  margin-left: 0;
  transition: transform 0.4s ease;
  display: inline-block;
`

export default RoundIcon
