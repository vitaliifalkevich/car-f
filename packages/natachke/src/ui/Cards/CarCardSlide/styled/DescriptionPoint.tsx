import styled from 'styled-components'
import { media } from 'styles/media'

const DescriptionPoint = styled.div`
  width: 4px;
  height: 4px;
  border-radius: 50%;
  background: ${({ theme }) => theme.colors.descriptionPoint};
  margin: 0 10px;
  ${media.mobile`
    display: none;
  `}
`

export default DescriptionPoint
