import React from 'react'
import { media } from 'styles/media'
import styled from 'styled-components'
import deleteIcon from 'assets/icons/trash.svg'

const Container = styled.div`
  display: flex;
  justify-content: flex-end;
  position: absolute;
  right: 0;
  transform: translate(0, -41px);
  ${media.mobile`
    position: initial;
    transform: initial;
  `}
`

const Remove = styled.img`
  cursor: pointer;
`

export default props => (
  <Container {...props}>
    <Remove src={deleteIcon} alt="remove" />
  </Container>
)
