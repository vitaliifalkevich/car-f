import React from 'react'
import { CarCardSlide } from 'ui/Cards'
import { Container } from './styled'
import { ICarEntity } from 'types/cars'
import { IMAGE_SiZES } from 'config'

interface SlideProps {
  cars: ICarEntity[]
  slideNumber: number
  carImageSize?: IMAGE_SiZES
}
const Slide: React.FC<SlideProps> = ({ cars, slideNumber, carImageSize }) => {
  return (
    <Container gridTemplate={slideNumber % 2 === 0 ? 'left' : 'right'}>
      {cars.map((item, idx) => (
        <CarCardSlide
          key={`carCard-${idx}${item.image}`}
          {...(item as any)}
          carImageSize={carImageSize}
        />
      ))}
    </Container>
  )
}

export default Slide
