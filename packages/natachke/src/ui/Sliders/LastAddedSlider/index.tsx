import React, { useCallback, useEffect, useMemo, useState } from 'react'
import ComponentThemeProvider from 'styles/theme/ComponentThemeProvider'
import themes from './themes'
import { SliderWrapper, NavigationWrapper, NavigateButton } from '../styled'
import { LeftMask, RightMask, SliderBlockContainer } from './styled'
import { useGenerateSlideBlocks } from 'hooks'
import Slider from 'react-slick'
import Slide from './Slide'
import { useBreakpoint } from 'MediaQueriesProvider'
import { ISearchCar } from 'entities/HomeCars/types'
import { usePreloadedSlide } from './PreloadSlide'

const LastAddedSlider: React.FC<{ cars: ISearchCar[] }> = ({ cars }) => {
  const breakpoints = useBreakpoint()
  const preloadedSlide = usePreloadedSlide()
  const countCardsInSlider = breakpoints.mobile ? 2 : breakpoints.tablet ? 3 : 4
  const slides = useGenerateSlideBlocks({
    cards: cars,
    countCards: countCardsInSlider,
    cutPartial: true,
  })
  const calculateMaskSize = useCallback(() => (window.innerWidth - 820) / 2, [])
  const [maskSize, setMaskSize] = useState(calculateMaskSize)
  const [slider, setSlider] = useState<React.SetStateAction<any>>()
  const sliderSettings = useMemo(() => {
    const lazyLoad: 'ondemand' | 'progressive' = 'progressive'
    return {
      className: 'last-added-slider',
      dots: false,
      infinite: true,
      speed: 500,
      arrows: false,
      initialSlide: 1,
      slidesToShow: 1,
      useTransform: false,
      slidesToScroll: 1,
      lazyLoad,
      draggable: false,
      centerMode: true,
    }
  }, [])

  useEffect(() => {
    if (breakpoints.mobile || breakpoints.tablet) return
    const resizeHandler = () => {
      setMaskSize(calculateMaskSize)
    }
    window.addEventListener('resize', resizeHandler)
    return () => {
      window.removeEventListener('resize', resizeHandler)
    }
  }, [breakpoints.mobile, breakpoints.tablet, calculateMaskSize])

  return (
    <ComponentThemeProvider themes={themes}>
      <SliderBlockContainer>
        <SliderWrapper>
          {!breakpoints.mobile && !breakpoints.tablet && (
            <LeftMask maskWidth={maskSize} />
          )}

          <NavigationWrapper direction="prev">
            <NavigateButton direction="prev" onClick={slider?.slickPrev} />
          </NavigationWrapper>

          <Slider ref={c => setSlider(c)} {...sliderSettings}>
            {slides.length > 0
              ? slides.map((slideData, idx) => (
                  <Slide
                    key={`slide${slideData[0]?.id}${idx}`}
                    cars={slideData}
                  />
                ))
              : preloadedSlide}
          </Slider>
          <NavigationWrapper direction="next">
            <NavigateButton direction="next" onClick={slider?.slickNext} />
          </NavigationWrapper>
          {!breakpoints.mobile && !breakpoints.tablet && (
            <RightMask maskWidth={maskSize} />
          )}
        </SliderWrapper>
      </SliderBlockContainer>
    </ComponentThemeProvider>
  )
}

export default LastAddedSlider
