import styled from 'styled-components'
import { media } from 'styles/media'

const TechContainer = styled.div<{ withActions?: boolean }>`
  display: grid;
  align-items: flex-start;
  grid-template-columns: repeat(2, 1fr);
  max-width: 260px;
  width: 100%;
  margin: ${({ withActions }) => (withActions ? '12px 0 12px' : '10px 0 10px')};
  grid-gap: 10px;
  & > div {
    display: flex;
    align-items: center;
  }
  ${media.tablet`
      margin: ${({ withActions }) =>
        withActions ? '16px 0 20px' : '10px 0 0'};
  `}
  ${media.mobile`
     margin: 12px 0 12px;
  `}
`

export default TechContainer
