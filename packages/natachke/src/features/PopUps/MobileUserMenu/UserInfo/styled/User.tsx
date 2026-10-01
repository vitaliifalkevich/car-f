import React from 'react'
import styled from 'styled-components'
import sellerIcon from 'assets/icons/sellerIcon.svg'

const User = styled.img`
  width: 28px;
  height: 28px;
  margin-right: 10px;
`

export default () => <User src={sellerIcon} alt="seller" />
