import React from 'react'
import ContentLoader from 'react-content-loader'

const CarCardSearchMobile: React.FC = () => {
  return (
    <ContentLoader
      speed={2}
      width="100%"
      viewBox="0 0 220 140"
      backgroundColor="#e5e5e7"
      foregroundColor="#d6d7da"
    >
      <rect
        x="calc(50% - 16px)"
        y="18"
        rx="4"
        ry="4"
        width="calc(50% + 8px)"
        height="8"
      />
      <rect x="8" y="34" rx="6" ry="6" width="calc(100% - 16px)" height="58" />
      <rect
        x="8px"
        y="100"
        rx="3"
        ry="3"
        width="calc(100% - 16px)"
        height="5"
      />
      <rect x="8px" y="110" rx="3" ry="3" width="calc(60% - 16px)" height="5" />
      <rect x="8px" y="120" rx="3" ry="3" width="calc(30% - 16px)" height="5" />
    </ContentLoader>
  )
}

export default CarCardSearchMobile
