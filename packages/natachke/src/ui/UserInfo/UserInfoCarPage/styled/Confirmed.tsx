import React from 'react'
import Text from './Text'
import styled from 'styled-components'
import confirmedSuccess from 'assets/icons/confirmedSuccess.svg'
import unconfirmed from 'assets/icons/unConfirmedIcon.svg'

const Icon = styled.img`
  margin-right: 6px;
`

export default ({ isConfirmed, text }) => {
  return (
    <>
      <Icon
        src={isConfirmed ? confirmedSuccess : unconfirmed}
        alt={isConfirmed ? 'confirmed' : 'unconfirmed'}
      />
      <Text>{text}</Text>
    </>
  )
}
