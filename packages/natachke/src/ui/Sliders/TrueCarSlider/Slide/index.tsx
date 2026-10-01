import React from 'react'
import ComponentThemeProvider from 'styles/theme/ComponentThemeProvider'
import { CarCardSlide } from 'ui/Cards'
import { Container, CardWrapper } from './styled'
import themes from './themes'
import { ISearchCar } from 'entities/HomeCars/types'

interface SlideProps {
  cars: ISearchCar[]
}
const Slide: React.FC<SlideProps> = ({ cars }) => {
  return (
    <ComponentThemeProvider themes={themes}>
      <Container>
        {cars.map((item, idx) => (
          <CardWrapper key={`carCard-${idx}${item.id}`}>
            <CarCardSlide {...item} isRecommend={true} />
          </CardWrapper>
        ))}
      </Container>
    </ComponentThemeProvider>
  )
}

export default Slide
