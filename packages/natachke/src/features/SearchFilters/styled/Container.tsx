import styled, { css } from 'styled-components'
import { media } from 'styles/media'

const BorderStyles = css`
  border-bottom: 2px solid ${({ theme }) => theme.colors.borderColor};
`

const Container = styled.div<{ showBorderBottom: boolean }>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  grid-gap: 20px;
  ${({ showBorderBottom }) => showBorderBottom && BorderStyles}
  padding-bottom: 10px;
  ${media.mobile`
    border-bottom: none;
    padding-bottom: 0;
  `}
`

export default Container
