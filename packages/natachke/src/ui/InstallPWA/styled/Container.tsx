import styled from 'styled-components'

const Container = styled.div`
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  min-height: 50px;
  display: grid;
  align-items: center;
  background: ${({ theme }) => theme.colors.background};
  border-top: 1px solid ${({ theme }) => theme.colors.borderColor};
  grid-gap: 12px;
  padding: 5px 12px;
  grid-template-columns: 50px auto 35px;
  grid-gap: 20px;
  cursor: pointer;
`

export default Container
