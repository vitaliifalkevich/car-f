import styled from 'styled-components'

const TechContainer = styled.div`
  display: grid;
  align-items: center;
  grid-template-columns: repeat(2, 1fr);
  max-width: 260px;
  width: 100%;
  margin: 15px 0;
  grid-gap: 10px;
  & > div {
    display: flex;
    align-items: center;
  }
`

export default TechContainer
