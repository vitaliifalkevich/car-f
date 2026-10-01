import styled from 'styled-components'
import { media } from 'styles/media'

const FormItemContainer = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: 120px auto;
  grid-gap: 12px;
  margin: 12px 0;
  align-items: center;
  ${media.tablet`
    grid-template-columns: auto;
    grid-gap: 3px;
    & > div {
     width: 100%;
    }
  `}
  ${media.mobile`
    grid-template-columns: auto;
    grid-gap: 3px;
  `}
`

export default FormItemContainer
