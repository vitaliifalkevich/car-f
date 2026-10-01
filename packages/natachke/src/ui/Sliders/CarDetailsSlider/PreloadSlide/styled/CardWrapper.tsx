import styled from 'styled-components'
import { media } from 'styles/media'

const CardWrapper = styled.div`
  background: ${({ theme }) => theme.colors.cardBackground};
  border-radius: 16px;
  max-height: 100%;
  overflow: hidden;
  svg {
    max-height: 440px;
  }

  ${media.tablet`
    svg {
      height: 317px;
      transform: scale(1.3);
    }
  `}
  ${media.mobile`
    border-radius: 0;
    svg {
      height: 100%;
      transform: scale(1.3);
    }
  `}
`

export default CardWrapper
