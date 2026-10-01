import styled, { css } from 'styled-components'

const leftLabel = css`
  display: grid;
  align-items: center;
  grid-template-columns: 1fr 2fr;
  grid-gap: 30px;
`

const InputWrapper = styled.div<{ alignLabel: 'top' | 'left' }>`
  text-align: left;
  ${({ alignLabel }) => alignLabel === 'left' && leftLabel}
`

export default InputWrapper
