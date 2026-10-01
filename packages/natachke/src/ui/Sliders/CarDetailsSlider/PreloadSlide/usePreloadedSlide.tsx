import React from 'react'
import ComponentThemeProvider from 'styles/theme/ComponentThemeProvider'
import themes from './themes'
import { CardWrapper, Container } from './styled'
import { CarDetailsSliderPreloader } from 'ui/Loaders'

export const useBigCarDetailsPreloadedSlide = () => {
  return (
    <ComponentThemeProvider themes={themes}>
      <Container>
        <CardWrapper>
          <CarDetailsSliderPreloader />
        </CardWrapper>
      </Container>
    </ComponentThemeProvider>
  )
}
