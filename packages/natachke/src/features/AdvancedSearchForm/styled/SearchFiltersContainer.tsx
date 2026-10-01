import styled from 'styled-components'
import { media } from 'styles/media'

const SearchFiltersContainer = styled.div`
  display: grid;
  grid-template-columns: 120px auto;
  grid-gap: 12px;
  margin: 12px 0;
  align-items: center;
  & > div {
    margin-bottom: 0;
    padding-bottom: 0;
    & > div > div > div {
      margin-bottom: 0;
    }
  }
  ${media.mobile`
    grid-template-columns: auto;
    margin: 12px 0;
    width: 96%;
  `}
`

export default SearchFiltersContainer
