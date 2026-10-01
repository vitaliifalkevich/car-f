import React, { useMemo } from 'react'
import ContentLoader from 'react-content-loader'
import { useBreakpoint } from 'MediaQueriesProvider'

const CarPreviewSliderPreloader: React.FC = () => {
  const breakpoints = useBreakpoint()

  const viewBox = useMemo(() => {
    if (breakpoints.mobile || breakpoints.tablet) return '0 0 118 70'
    return '0 0 92 70'
  }, [breakpoints.mobile, breakpoints.tablet])

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
        rx="8.56px"
        ry="8.56px"
        width="calc(100%)"
        height="calc(100%)"
      />
    </ContentLoader>
  )
}

export default CarPreviewSliderPreloader
