import React from 'react'
import styled from 'styled-components'
import deleteIcon from 'assets/icons/trash.svg'

const Container = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-bottom: -15px;
`

const Remove = styled.img`
  cursor: pointer;
`

export default props => (
  <Container {...props}>
    <Remove src={deleteIcon} alt="remove" />
  </Container>
)
