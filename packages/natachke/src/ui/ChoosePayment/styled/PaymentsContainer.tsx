import styled from 'styled-components'
import { media } from 'styles/media'

const PaymentsContainer = styled.div`
  display: flex;
  grid-gap: 30px;
  align-items: center;
  padding: 23px 0 30px;
  flex-wrap: wrap;
  ${media.mobile`
    grid-gap: 20px;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
  `}
`

export default PaymentsContainer
