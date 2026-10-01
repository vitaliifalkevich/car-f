import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 6px;
  background: ${({ theme }) => theme.colors.backgroundColor};
  margin-bottom: 5px;
`

export default Container
