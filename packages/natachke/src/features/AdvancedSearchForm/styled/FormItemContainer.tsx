import styled from 'styled-components'
import { media } from 'styles/media'

const FormItemContainer = styled.div<{
  align?: 'baseline' | 'center'
}>`
  display: grid;
  grid-template-columns: 120px repeat(3, 1fr);
  grid-gap: 12px;
  margin: 12px 0;
  align-items: ${({ align }) => align || `center`};
  ${media.tablet`
    grid-template-columns: 120px repeat(2, 1fr);
    width: 96%;
  `}
  ${media.mobile`
    grid-template-columns: auto;
  `}
`

export default FormItemContainer
