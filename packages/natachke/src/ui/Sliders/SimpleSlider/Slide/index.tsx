import React from 'react'
import { CarCardSlide } from 'ui/Cards'
import { Container } from './styled'
import { ISearchCar } from 'entities/HomeCars/types'

interface SlideProps {
  cars: ISearchCar[]
  desktopCount: number
  tabletCount: number
}
const Slide: React.FC<SlideProps> = ({ cars, desktopCount, tabletCount }) => {
  return (
    <Container desktopCount={desktopCount} tabletCount={tabletCount}>
      {cars.map((item, idx) => {
        return <CarCardSlide key={`carCard-${idx}${item.url}`} {...item} />
      })}
    </Container>
  )
}

export default Slide
