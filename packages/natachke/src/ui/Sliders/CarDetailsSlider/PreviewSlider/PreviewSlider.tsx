import React, { useCallback, useMemo, useState } from 'react'
import { Container, SliderBlockContainer, ImagePreview, Arrow } from './styled'
import Slider from 'react-slick'
import { useBreakpoint } from 'MediaQueriesProvider'
import { usePreloadedSlide } from './PreloadSlide'

interface PreviewSliderProps {
  images: string[]
  setActive: (idx: number) => void
  active: number
}

const PreviewSlider: React.FC<PreviewSliderProps> = ({
  images,
  setActive,
  active,
}) => {
  const breakpoints = useBreakpoint()
  const existImages = useMemo(
    () => images && Object.keys(images).length !== 0,
    [images],
  )
  const preloadedSlide = usePreloadedSlide()
  const [slider, setSlider] = useState<React.SetStateAction<any>>()
  const [activePreview, setPreviewActive] = useState(0)
  const sliderSettings = useMemo(() => {
    const lazyLoad: 'ondemand' | 'progressive' = 'progressive'
    return {
      dots: false,
      infinite: false,
      speed: 500,
      arrows: false,
      initialSlide: 0,
      className: 'miniPreviewSlider',
      slidesToShow: breakpoints.mobile ? 4 : breakpoints.tablet ? 4 : 6,
      useTransform: false,
      beforeChange: (oldIndex, newIdx) => {
        setPreviewActive(newIdx)
      },
      slidesToScroll: breakpoints.mobile ? 2 : 1,
      draggable: false,
      lazyLoad,
    }
  }, [breakpoints.mobile, breakpoints.tablet])

  const clickNextSlide = useCallback(() => {
    slider?.slickNext()
  }, [slider])

  const clickPrevSlide = useCallback(() => {
    slider?.slickPrev()
  }, [slider])

  return (
    <SliderBlockContainer>
      <Container>
        {!breakpoints.mobile && activePreview > 0 && (
          <Arrow direction="prev" onClick={clickPrevSlide} />
        )}
        <Slider ref={c => setSlider(c)} {...sliderSettings}>
          {existImages
            ? images?.map((image, idx) => (
                <ImagePreview
                  key={`image_preview_${idx}`}
                  src={image}
                  isActive={idx === active}
                  alt="car"
                  onClick={() => {
                    setActive(idx)
                  }}
                />
              ))
            : preloadedSlide}
        </Slider>
        {!breakpoints.mobile && activePreview < images?.length - 6 && (
          <Arrow direction="next" onClick={clickNextSlide} />
        )}
      </Container>
    </SliderBlockContainer>
  )
}

export default PreviewSlider
