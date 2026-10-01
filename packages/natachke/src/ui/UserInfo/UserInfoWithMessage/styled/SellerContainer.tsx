import styled from 'styled-components'
import { media } from 'styles/media'

const SellerContainer = styled.div`
  display: flex;
  align-items: center;
  ${media.tablet`
    display: grid;
    grid-template-columns: 28px auto 200px;
    grid-gap: 11px;
    align-items: center;
    & > div:nth-child(2) > div:first-child {
      display: flex;
      grid-gap: 10px;
    }

  `}
  ${media.mobile`
    grid-template-columns: 28px auto;
    & > div:nth-child(2) > div:first-child {
      display: block;
    }

  `}
`

export default SellerContainer
