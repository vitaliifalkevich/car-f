import styled from 'styled-components'
import { media } from 'styles/media'

const CardWrapper = styled.div`
  padding: 9px;
  background: ${({ theme }) => theme.colors.cardBackground};
  border-radius: 16px;
  & > div > div.image-card-container {
    margin-top: -30px;
  }
  .car-card-description {
    font-size: 12px;
  }
  ${media.mobile`
    padding: 4px;
    & > div > div.image-card-container {
      height: 90px;
    }
  `}
`

export default CardWrapper
