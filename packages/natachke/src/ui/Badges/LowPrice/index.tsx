import React from 'react'
import Badge, { IBadge } from '../Badge'
import lowPrice from 'assets/icons/lowPrice.svg'

const LowPrice: React.FC<IBadge> = ({ size }) => {
  return <Badge icon={lowPrice} size={size} />
}

export default LowPrice
