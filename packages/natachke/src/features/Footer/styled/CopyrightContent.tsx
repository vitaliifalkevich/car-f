import styled from 'styled-components'
import { media } from 'styles/media'

const CopyrightContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  max-width: 650px;
  margin: 0 auto;
  ${media.mobile`
    flex-direction: column;
  `}
`

export default CopyrightContent
