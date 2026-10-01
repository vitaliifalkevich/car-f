import React from 'react'
import ContentLoader from 'react-content-loader'

interface CarCardSlidePreloaderProps {
  viewBox?: string
  width?: string
  height?: string
  lineFirstWidth?: string
  lineSecondWidth?: string
  lineThirdWidth?: string
}
const CarCardSlidePreloader: React.FC<CarCardSlidePreloaderProps> = ({
  viewBox = '0 0 220 204',
  width = 'calc(100% - 26px)',
  height = '117',
  lineFirstWidth = '150',
  lineSecondWidth = '100',
  lineThirdWidth = '80',
}) => {
  return (
    <ContentLoader
      speed={2}
      width="100%"
      viewBox={viewBox}
      backgroundColor="#e5e5e7"
      foregroundColor="#d6d7da"
    >
      <rect x="13" y="13" rx="16" ry="16" width={width} height={height} />
      <rect x="13" y="142" rx="3" ry="3" width={lineFirstWidth} height="15" />
      <rect x="13" y="165" rx="3" ry="3" width={lineSecondWidth} height="8" />
      <rect x="13" y="180" rx="3" ry="3" width={lineThirdWidth} height="8" />
    </ContentLoader>
  )
}

export default CarCardSlidePreloader
