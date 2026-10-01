import styled from 'styled-components'

const SetInputsGridContainer = styled.div<{ cols: number }>`
  display: grid;
  grid-template-columns: ${({ cols = 1 }) => `repeat(${cols}, 1fr)`};
  grid-gap: 15px;
  .input-text-label {
    font-family: ${({ theme }) => theme.fonts.ralewaySemibold};
    font-size: 13px;
    line-height: 15px;
  }
`

export default SetInputsGridContainer
