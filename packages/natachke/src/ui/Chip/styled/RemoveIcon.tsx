import React from 'react'
import styled from 'styled-components'
import remove from 'assets/icons/remove.svg'

const Container = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  border-radius: 0 6px 6px 0;
  width: 25px;
  transition: 0.5s background;
  &:hover,
  &:active {
    background: ${({ theme }) => theme.colors.removeButtonActiveColor};
  }
`

export default ({ onClick }) => (
  <Container onClick={onClick}>
    <img src={remove} alt="remove" />
  </Container>
)
