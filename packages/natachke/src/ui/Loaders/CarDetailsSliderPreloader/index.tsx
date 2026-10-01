import React, { useMemo } from 'react'
import ContentLoader from 'react-content-loader'
import { useBreakpoint } from 'MediaQueriesProvider'

const CarDetailsSliderPreloader: React.FC = () => {
  const breakpoints = useBreakpoint()

  const viewBox = useMemo(() => {
    if (breakpoints.tablet) return '0 0 356 204'
    return '0 0 308 204'
  }, [breakpoints.tablet])

  return (
    <ContentLoader
      speed={2}
      width="100%"
      viewBox={viewBox}
      backgroundColor="#e5e5e7"
      foregroundColor="#d6d7da"
    >
      <rect
        x="0"
        y="0"
        rx="3%"
        ry="3%"
        width="calc(100%)"
        height="calc(100%)"
      />
    </ContentLoader>
  )
}

export default CarDetailsSliderPreloader
