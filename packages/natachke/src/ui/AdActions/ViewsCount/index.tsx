import React from 'react'
import { Icon, Item, Text } from '../styled'
import view from 'assets/icons/view.svg'

const ViewsCount: React.FC<{ viewCount: number }> = ({ viewCount }) => {
  return (
    <Item>
      <Icon src={view} alt="view" />
      <Text>{viewCount}</Text>
    </Item>
  )
}

export default ViewsCount
