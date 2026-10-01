import styled from 'styled-components'

const TechContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  margin: 10px 0;
  grid-gap: 15px;
  flex-wrap: wrap;
  & > div {
    display: flex;
    align-items: center;
  }
`

export default TechContainer
