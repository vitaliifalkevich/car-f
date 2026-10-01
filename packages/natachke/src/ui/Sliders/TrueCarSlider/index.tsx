import React, { useMemo, useState } from 'react'
import { SliderWrapper, NavigationWrapper, NavigateButton } from '../styled'
import { SliderBlockContainer } from './styled'
import { useGenerateSlideBlocks } from 'hooks'
import Slider from 'react-slick'
import Slide from './Slide'
import { useBreakpoint } from 'MediaQueriesProvider'
import { ISearchCar } from 'entities/HomeCars/types'
import { usePreloadedSlide } from './PreloadSlide'

export interface TrueCarSliderProps {
  cars: ISearchCar[]
  initialSlide?: number
}

const TrueCarSlider: React.FC<TrueCarSliderProps> = ({
  cars,
  initialSlide = 0,
}) => {
  const breakpoints = useBreakpoint()
  const preloadedSlide = usePreloadedSlide()
  const countCardsInSlider = breakpoints.mobile ? 4 : breakpoints.tablet ? 6 : 8
  const slides = useGenerateSlideBlocks({
    cards: cars,
    countCards: countCardsInSlider,
    cutPartial: true,
  })
  const [slider, setSlider] = useState<React.SetStateAction<any>>()
  const sliderSettings = useMemo(() => {
    const lazyLoad: 'ondemand' | 'progressive' = 'progressive'
    return {
      dots: false,
      infinite: true,
      speed: 500,
      arrows: false,
      initialSlide,
      className: 'true-car-slider',
      slidesToShow: 1,
      useTransform: false,
      slidesToScroll: 1,
      draggable: false,
      lazyLoad,
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
  }, [initialSlide])

  return (
    <SliderBlockContainer>
      <SliderWrapper>
        {slides.length > 1 && (
          <NavigationWrapper direction="prev" top="50%">
            <NavigateButton direction="prev" onClick={slider?.slickPrev} />
          </NavigationWrapper>
        )}

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
        {slides.length > 1 && (
          <NavigationWrapper direction="next" top="50%">
            <NavigateButton direction="next" onClick={slider?.slickNext} />
          </NavigationWrapper>
        )}
      </SliderWrapper>
    </SliderBlockContainer>
  )
}

export default TrueCarSlider
