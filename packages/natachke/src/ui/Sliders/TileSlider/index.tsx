import React, { useMemo, useState } from 'react'
import { SliderWrapper, NavigationWrapper, NavigateButton } from '../styled'
import { SliderBlockContainer } from './styled'
import { useGenerateSlideBlocks } from '../../../hooks'
import { ICarEntity } from 'entities/types'
import Slider from 'react-slick'
import Slide from './Slide'
import { useBreakpoint } from 'MediaQueriesProvider'
import { ISearchCar } from 'entities/Search/types'
import { IMAGE_SiZES } from 'config'

export interface TileSliderProps {
  cars: ICarEntity[] | ISearchCar[]
  initialSlide?: number
  carImageSize?: IMAGE_SiZES
}

const TileSlider: React.FC<TileSliderProps> = ({
  cars,
  initialSlide = 0,
  carImageSize,
}) => {
  const breakpoints = useBreakpoint()
  const countCardsInSlider = breakpoints.mobile ? 4 : breakpoints.tablet ? 6 : 5
  const slides = useGenerateSlideBlocks({
    cards: cars,
    countCards: countCardsInSlider,
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
        <NavigationWrapper direction="prev">
          <NavigateButton direction="prev" onClick={slider?.slickPrev} />
        </NavigationWrapper>
        <Slider ref={c => setSlider(c)} {...sliderSettings}>
          {slides.map((slideData, idx) => (
            <Slide
              key={`slide${slideData[0]?.price}${slideData[0]?.slug}${idx}`}
              cars={slideData}
              slideNumber={idx}
              carImageSize={carImageSize}
            />
          ))}
        </Slider>
        <NavigationWrapper direction="next">
          <NavigateButton direction="next" onClick={slider?.slickNext} />
        </NavigationWrapper>
      </SliderWrapper>
    </SliderBlockContainer>
  )
}

export default TileSlider
