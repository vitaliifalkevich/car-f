import React from 'react'
import ContentLoader from 'react-content-loader'

const CarCardSearchRow: React.FC = () => {
  return (
    <ContentLoader
      speed={2}
      width="100%"
      viewBox="0 0 220 204"
      backgroundColor="#e5e5e7"
      foregroundColor="#d6d7da"
    >
      <rect x="8" y="8" rx="6" ry="6" width="calc(50% - 16px)" height="50" />

      <rect
        x="calc(50%)"
        y="15"
        rx="4"
        ry="4"
        width="calc(50% - 16px)"
        height="8"
      />
      <rect
        x="calc(50%)"
        y="28"
        rx="3"
        ry="3"
        width="calc(40% - 16px)"
        height="5"
      />
      <rect
        x="calc(50%)"
        y="38"
        rx="3"
        ry="3"
        width="calc(30% - 16px)"
        height="5"
      />
    </ContentLoader>
  )
}

export default CarCardSearchRow
