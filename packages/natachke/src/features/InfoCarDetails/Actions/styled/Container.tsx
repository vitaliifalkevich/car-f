import styled from 'styled-components'

const Container = styled.div`
  margin-top: 12px;
  display: flex;
  align-items: flex-start;
  & > div:first-child {
    display: flex;
    grid-gap: 37px;
    margin-right: 37px;
  }
  & > div:last-child {
    display: grid;
    grid-gap: 12px 37px;
    grid-template-columns: repeat(2, auto);
  }
`

export default Container
