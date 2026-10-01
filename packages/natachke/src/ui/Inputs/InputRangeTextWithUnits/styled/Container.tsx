import styled from 'styled-components'

const Container = styled.div`
  display: grid;
  grid-gap: 0;
  grid-template-columns: repeat(2, 1fr);
  border-radius: 10px;
  position: relative;
  & > input:first-child {
    border-radius: 10px 0 0 10px;
  }
  & > input:last-child {
    border-radius: 0 10px 10px 0;
  }
`

export default Container
