import styled from 'styled-components'
import { media } from 'styles/media'

const CardWrapper = styled.div`
  padding: 13px;
  background: ${({ theme }) => theme.colors.cardBackground};
  border-radius: 16px;
  ${media.mobile`
    padding: 4px;
  `}
`

export default CardWrapper
