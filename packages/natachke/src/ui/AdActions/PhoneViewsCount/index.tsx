import React from 'react'
import { Icon, Item, Text } from '../styled'
import phone from 'assets/icons/phone.svg'

const PhoneViewsCount: React.FC<{ phoneCount: number }> = ({ phoneCount }) => {
  return (
    <Item>
      <Icon src={phone} alt="phone" />
      <Text>{phoneCount}</Text>
    </Item>
  )
}

export default PhoneViewsCount
