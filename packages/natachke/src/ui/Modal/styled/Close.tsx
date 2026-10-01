import React from 'react'
import styled from 'styled-components'
import closeIcon from 'assets/icons/close.svg'

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 35px;
  height: 35px;
  border-radius: 50%;
  background: ${({ theme }) => theme.colors.closeBackground};
  position: fixed;
  cursor: pointer;
  right: 22px;
  top: 22px;
  z-index: 99999;
`

const Icon = styled.img`
  width: 14px;
  height: 14px;
`

export default ({ onClick }) => (
  <Container onClick={onClick}>
    <Icon src={closeIcon} alt="close" />
  </Container>
)
