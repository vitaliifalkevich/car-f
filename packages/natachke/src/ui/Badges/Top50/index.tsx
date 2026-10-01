import React from 'react'
import Badge, { IBadge } from '../Badge'
import star from 'assets/icons/star.svg'

const Top50: React.FC<IBadge> = ({ size, tooltip }) => {
  return (
    <Badge
      icon={star}
      size={size}
      tooltip={tooltip}
      tooltipId="top-catalog-tooltip"
    />
  )
}

export default Top50
