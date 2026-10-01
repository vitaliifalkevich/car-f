import styled from 'styled-components'
import { media } from 'styles/media'

const ButtonsWrapper = styled.div`
  display: grid;
  grid-template-columns: 120px auto;
  grid-gap: 12px;
  margin: 24px 0 12px;
  align-items: center;
  ${media.mobile`
    grid-template-columns: auto;
  `}
`

export default ButtonsWrapper
