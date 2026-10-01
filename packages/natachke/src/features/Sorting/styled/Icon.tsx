import React from 'react'
import styled from 'styled-components'
import { media } from 'styles/media'
import sort from 'assets/icons/sort.svg'

const Icon = styled.img`
  margin-right: 7px;
  ${media.mobile`
    margin-right: 0;
    height: 10px;
  `}
`

export default () => <Icon src={sort} alt="sort" />
