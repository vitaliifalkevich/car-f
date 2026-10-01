import React from 'react'
import styled from 'styled-components'
import { StepState } from '../types'
import check from 'assets/icons/check.svg'

const Container = styled.div`
  display: grid;
  grid-template-columns: 24px auto;
  align-items: center;
`

const Icon = styled.div<{ state: StepState }>`
  width: 24px;
  height: 24px;
  border-radius: 50%;
  font-size: 12px;
  line-height: 166%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.colors.iconColor};
  font-family: ${({ theme }) => theme.fonts.ralewayRegular};
  background: ${({ theme, state }) =>
    state === StepState.NEXT
      ? theme.colors.defaultColor
      : theme.colors.activeColor};
`

const Text = styled.div`
  font-size: 14px;
  line-height: 150%%;
  font-family: ${({ theme }) => theme.fonts.ralewayRegular};
  color: ${({ theme }) => theme.colors.textColor};
  margin-left: 8px;
  white-space: nowrap;
`

export default ({ state, label, idx }) => (
  <Container>
    <Icon state={state}>
      {state === StepState.FINISHED ? <img src={check} alt="check" /> : idx + 1}
    </Icon>
    <Text>{label}</Text>
  </Container>
)
