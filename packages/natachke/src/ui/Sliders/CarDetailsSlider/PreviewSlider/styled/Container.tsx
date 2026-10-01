import styled from 'styled-components'
import { media } from 'styles/media'

const Container = styled.div`
  position: relative;
  .miniPreviewSlider {
    overflow: hidden;
    .slick-list {
      width: 92%;
      overflow: visible;
    }
    .slick-track {
      display: flex;
      grid-gap: 9px;
      margin-left: -9px;
    }
  }
  ${media.mobile`
    margin: 0px -15px 0 -10px;
    .miniPreviewSlider {
    .slick-track {
      grid-gap: 7px;
      margin-left: -7px;
    }
  `}
`

export default Container
