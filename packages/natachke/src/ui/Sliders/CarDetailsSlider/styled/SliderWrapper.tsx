import styled from 'styled-components'
import { media } from 'styles/media'

const SliderWrapper = styled.div`
  .slick-slider .slick-list,
  .slick-slider .slick-track {
    border-radius: 24px;
  }

  ${media.mobile`
   .slick-slider .slick-list,
   .slick-slider .slick-track {
    border-radius: 0;
  }
  `}
`

export default SliderWrapper
