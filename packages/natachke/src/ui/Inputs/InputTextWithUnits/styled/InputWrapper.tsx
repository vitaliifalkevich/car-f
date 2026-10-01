import styled, { css } from 'styled-components'
import { media } from 'styles/media'

const leftLabel = css`
  display: grid;
  align-items: center;
  grid-template-columns: 1fr 2fr;
  grid-gap: 30px;
`

const InputWrapper = styled.div<{ alignLabel: 'top' | 'left' }>`
  text-align: left;
  ${({ alignLabel }) => alignLabel === 'left' && leftLabel}
  display: grid;
  align-items: center;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 15px;
  grid-gap: 15px;
  ${media.tablet`
    width: 96%;
  `}
  ${media.mobile`
    & > div:last-child {
      width: 100%;
    }
  `}
`

export default InputWrapper
