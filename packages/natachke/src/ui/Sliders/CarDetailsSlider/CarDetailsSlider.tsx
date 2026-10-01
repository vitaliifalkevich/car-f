import React, { useCallback, useMemo, useState } from 'react'
import ComponentThemeProvider from 'styles/theme/ComponentThemeProvider'
import themes from './themes'
import { Container, NavigationWrapper, SliderWrapper } from './styled'
import { NavigateButton } from '../styled'
import Slider from 'react-slick'
import Slide from './Slide'
import Counter from './Counter'
import Scale from './Scale'
import { PreviewSlider } from './PreviewSlider'
import FullScreenMode from './FullScreenMode'
import { CarInfoImages } from 'entities/types'
import { IMAGE_SiZES } from 'config'
import { useBigCarDetailsPreloadedSlide } from './PreloadSlide'

interface CarDetailsSliderProps {
  images?: CarInfoImages
}

const CarDetailsSlider: React.FC<CarDetailsSliderProps> = ({ images }) => {
  const [slider, setSlider] = useState<React.SetStateAction<any>>()
  const [isFullScreenMode, setFullScreenMode] = useState(false)
  const [activeSlide, setActiveSlide] = useState(0)
  const bigCarDetailsPreloadedSlide = useBigCarDetailsPreloadedSlide()
  const sliderSettings = useMemo(() => {
    const lazyLoad: 'ondemand' | 'progressive' = 'progressive'
    return {
      dots: false,
      infinite: true,
      speed: 500,
      arrows: false,
      slidesToShow: 1,
      useTransform: false,
      beforeChange: (oldSlide, slide: number) => {
        setActiveSlide(slide)
      },
      slidesToScroll: 1,
      draggable: false,
      lazyLoad,
    }
  }, [])

  const setSlide = useCallback(
    (idx: number) => {
      slider?.slickGoTo(idx)
    },
    [slider],
  )

  const openFullScreenMode = useCallback(() => {
    setFullScreenMode(true)
  }, [])

  const closeFullScreenMode = useCallback(() => {
    setFullScreenMode(false)
  }, [])

  const existImages = useMemo(
    () => images && Object.keys(images).length !== 0,
    [images],
  )

  // if (!images || Object.keys(images).length === 0) return null

  return (
    <ComponentThemeProvider themes={themes}>
      <>
        {existImages && isFullScreenMode && (
          <FullScreenMode
            images={images?.[IMAGE_SiZES.LG] || []}
            active={activeSlide}
            onClose={closeFullScreenMode}
          />
        )}
        <Container>
          {existImages && (
            <NavigationWrapper direction="prev">
              <NavigateButton direction="prev" onClick={slider?.slickPrev} />
            </NavigationWrapper>
          )}
          <SliderWrapper>
            <Slider ref={c => setSlider(c)} {...sliderSettings}>
              {images?.[IMAGE_SiZES.MD]
                ? images?.[IMAGE_SiZES.MD]?.map((image, idx) => (
                    <Slide
                      key={`slide${image}${idx}`}
                      src={image}
                      alt="car"
                      onClick={openFullScreenMode}
                    />
                  ))
                : bigCarDetailsPreloadedSlide}
            </Slider>
          </SliderWrapper>

          {existImages && (
            <NavigationWrapper direction="next">
              <NavigateButton direction="next" onClick={slider?.slickNext} />
            </NavigationWrapper>
          )}

          {images?.[IMAGE_SiZES.SM]?.length && (
            <Counter
              active={activeSlide + 1}
              count={images?.[IMAGE_SiZES.SM]?.length}
            />
          )}

          {existImages && <Scale onClick={openFullScreenMode} />}
        </Container>
        <PreviewSlider
          images={images?.[IMAGE_SiZES.SM] || []}
          setActive={setSlide}
          active={activeSlide}
        />
      </>
    </ComponentThemeProvider>
  )
}

export default CarDetailsSlider
