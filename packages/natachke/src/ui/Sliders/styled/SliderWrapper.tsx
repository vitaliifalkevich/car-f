import styled from 'styled-components'
import { media } from 'styles/media'

const SliderWrapper = styled.div`
  max-width: 100vw;
  margin: 30px auto 0;
  position: relative;
  .slick-slider.last-added-slider {
    .slick-list {
      overflow: visible;
    }
  }
  .slick-slider.true-car-slider {
    margin: 0 -7.5px;
  }
  ${media.tablet`
    max-width: 100%;
    margin-left: 0;
    margin-right: 0;
     overflow-x: hidden;
    .slick-slider{
      .slick-list {
        overflow: visible;
      }
    }
  `}
  ${media.mobile`
     max-width: 105%;
     margin: 20px -25px 0;
     overflow-x: hidden;
    .slick-slider{
      .slick-list {
        overflow: visible;
      }
    }
  `}
`

export default SliderWrapper
