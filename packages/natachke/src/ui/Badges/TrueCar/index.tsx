import React from 'react'
import Badge, { IBadge } from '../Badge'
import cool from 'assets/icons/cool.svg'

const TrueCar: React.FC<IBadge> = ({ size, tooltip }) => {
  return (
    <Badge
      icon={cool}
      size={size}
      tooltip={tooltip}
      tooltipId="true-car-tooltip"
    />
  )
}

export default TrueCar
