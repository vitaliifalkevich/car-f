import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  align-items: center;
  & > div:nth-child(2) {
    min-width: 130px;
  }
`

export default Container
