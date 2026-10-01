import styled, { css } from 'styled-components'
import { media } from 'styles/media'

const leftBigCard = css`
  & > div:first-child {
    grid-area: 1 / 1 / 3 / 3;
    height: 100%;
    & > div.image-card-container {
      height: 322px;
    }
  }
`

const rightBigCard = css`
  & > div:last-child {
    grid-area: 1 / 3 / 3 / 5;
    height: 100%;
    & > div.image-card-container {
      height: 322px;
    }
  }
`

const Container = styled.div<{ gridTemplate: 'left' | 'right' }>`
  display: grid;
  position: relative;
  gap: 15px;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  grid-template-rows: 190px;
  margin: 0 7.5px;
  ${media.l`
  ${({ gridTemplate }) =>
    gridTemplate === 'left' ? leftBigCard : rightBigCard}
  `}
  ${media.xl`
  ${({ gridTemplate }) =>
    gridTemplate === 'left' ? leftBigCard : rightBigCard}
  `}

  ${media.tablet`
    grid-template-columns: repeat(3, minmax(0, 1fr));
    grid-template-rows:auto;
  `}
   ${media.mobile`
    grid-template-columns: repeat(2, minmax(0, 1fr));
    grid-template-rows:auto;
    gap: 10px;
    margin: 0 5px;
  `}
`

export default Container
