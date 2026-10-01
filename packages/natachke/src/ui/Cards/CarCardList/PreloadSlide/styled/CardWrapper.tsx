import styled from 'styled-components'
import { media } from 'styles/media'

const CardWrapper = styled.div`
  background: ${({ theme }) => theme.colors.cardBackground};
  border-radius: 16px;
  margin-bottom: 30px;
  height: 200px;

  ${media.tablet`
      height: 170px;
  `}

  ${media.mobile`
      height: auto;
  `}
`

export default CardWrapper
