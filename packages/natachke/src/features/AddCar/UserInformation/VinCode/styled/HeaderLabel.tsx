import React from 'react'
import styled from 'styled-components'
import vin from 'assets/icons/vin.svg'

const HeaderLabel = styled.img`
  margin-right: 5px;
`

export default () => <HeaderLabel src={vin} alt="vin" />
