import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 300px;
  justify-content: center;
  & > button {
    width: 250px;
    margin: 20px auto;
  }
`

export default Container
