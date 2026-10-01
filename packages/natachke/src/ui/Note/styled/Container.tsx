import styled from 'styled-components'
import { media } from 'styles/media'

const Container = styled.div<{ type: 'warning' | 'error' }>`
  padding: 12px;
  border-radius: 8px;
  background: ${({ theme, type }) => theme.colors?.[type]};
  display: grid;
  grid-template-columns: 20px auto;
  grid-gap: 7px;
  align-items: center;
  margin-bottom: 30px;
  ${media.tablet`
    margin-bottom: 0;
    margin-top: 20px;
  `}
  ${media.mobile`
    margin-bottom: 0;
    margin-top: 12px;
  `}
`

export default Container
