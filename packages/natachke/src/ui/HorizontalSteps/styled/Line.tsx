import styled from 'styled-components'
import { media } from 'styles/media'

const Line = styled.div<{ countEl: number }>`
  width: calc(100% / ${({ countEl }) => countEl});
  height: 1px;
  background: ${({ theme }) => theme.colors.lineColor};
  ${media.mobile`
    height: 7px;
    width: 1px;
    margin-left: 12px;
  `}
`

export default Line
