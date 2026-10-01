import React from 'react'
import ComponentThemeProvider from 'styles/theme/ComponentThemeProvider'
import { CarCardSlide } from 'ui/Cards'
import { Container, CardWrapper } from './styled'
import { ISearchCar } from 'entities/HomeCars/types'
import themes from './themes'

interface SlideProps {
  cars: ISearchCar[]
}
const Slide: React.FC<SlideProps> = ({ cars }) => {
  return (
    <ComponentThemeProvider themes={themes}>
      <Container>
        {cars.map((item, idx) => (
          <CardWrapper key={`slide${item.id}${idx}`}>
            <CarCardSlide {...(item as any)} withButton={true} />
          </CardWrapper>
        ))}
      </Container>
    </ComponentThemeProvider>
  )
}

export default Slide
