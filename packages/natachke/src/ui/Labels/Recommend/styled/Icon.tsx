import React from 'react'
import { media } from 'styles/media'
import styled from 'styled-components'
import cool from 'assets/icons/cool.svg'

const Icon = styled.img`
  margin-right: 5.59px;
  width: 10px;
  height: 10px;
  object-fit: contain;
  ${media.mobile`
    margin-right: 0;
  `}
`

export default () => <Icon src={cool} alt="cool" />
