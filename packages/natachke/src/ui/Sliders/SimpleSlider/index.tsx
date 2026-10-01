import React, { useMemo, useState } from 'react'
import { SliderWrapper, NavigationWrapper, NavigateButton } from '../styled'
import { SliderBlockContainer } from './styled'
import { useGenerateSlideBlocks } from '../../../hooks'
import Slider from 'react-slick'
import Slide from './Slide'
import { useBreakpoint } from 'MediaQueriesProvider'
import { ISearchCar } from 'entities/HomeCars/types'
import { usePreloadedSlide } from './PreloadSlide'

export interface SimpleSliderProps {
  cars: ISearchCar[]
  desktopCount?: number
  tabletCount?: number
  showPrevNav?: boolean
  showNextNav?: boolean
  cutPartial?: boolean
}

const SimpleSlider: React.FC<SimpleSliderProps> = ({
  cars,
  desktopCount = 4,
  tabletCount = 3,
  showPrevNav = true,
  showNextNav = true,
  cutPartial = true,
}) => {
  const breakpoints = useBreakpoint()

  const countCardsInSlider = breakpoints.mobile
    ? 2
    : breakpoints.tablet
    ? tabletCount
    : desktopCount

  const preloadedSlide = usePreloadedSlide({
    desktopCount,
    tabletCount,
    countCardsInSlider,
  })
  const slides = useGenerateSlideBlocks({
    cards: cars,
    countCards: countCardsInSlider,
    cutPartial: cutPartial,
  })
  const [slider, setSlider] = useState<React.SetStateAction<any>>()
  const sliderSettings = useMemo(() => {
    const lazyLoad: 'ondemand' | 'progressive' = 'progressive'
    return {
      dots: false,
      infinite: true,
      speed: 500,
      arrows: false,
      slidesToShow: 1,
      useTransform: false,
      slidesToScroll: 1,
      lazyLoad,
      draggable: false,
      responsive: [
        {
          breakpoint: 1280,
          settings: {
            centerMode: true,
            arrows: false,
          },
        },
      ],
    }
  }, [])

  return (
    <SliderBlockContainer>
      <SliderWrapper>
        {showPrevNav && (
          <NavigationWrapper direction="prev" top="33%">
            <NavigateButton direction="prev" onClick={slider?.slickPrev} />
          </NavigationWrapper>
        )}
        <Slider ref={c => setSlider(c)} {...sliderSettings}>
          {slides.length > 0
            ? slides.map((slideData, idx) => (
                <Slide
                  key={`slide${slideData[0]?.id}${idx}`}
                  cars={slideData}
                  desktopCount={desktopCount}
                  tabletCount={tabletCount}
                />
              ))
            : preloadedSlide}
        </Slider>
        {showNextNav && slides.length > 1 && (
          <NavigationWrapper direction="next" top="33%">
            <NavigateButton direction="next" onClick={slider?.slickNext} />
          </NavigationWrapper>
        )}
      </SliderWrapper>
    </SliderBlockContainer>
  )
}

export default SimpleSlider
