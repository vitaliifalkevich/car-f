import React from 'react'
import styled from 'styled-components'
import topSearch from 'assets/icons/topSearch.svg'

const Icon = styled.img`
  margin-right: 5.59px;
  width: 10px;
  height: 10px;
  object-fit: contain;
`

export default () => <Icon src={topSearch} alt="top search" />
