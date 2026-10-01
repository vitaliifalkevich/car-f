import styled from 'styled-components'
import { media } from 'styles/media'

const TwoColumnsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  & > div {
    margin: 5px 0;
    min-width: 150px;
  }
  ${media.mobile`
    flex-direction: column;
    & > div {
    display: grid;
    grid-template-columns: 2fr 3fr;
    }
  `}
`

export default TwoColumnsContainer
