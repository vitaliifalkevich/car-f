import React, { useMemo } from 'react'
import ComponentThemeProvider from 'styles/theme/ComponentThemeProvider'
import themes from './themes'
import { Container, CardWrapper } from './styled'
import { CarCardSearchColumn, CarCardSearchRow } from 'ui/Loaders'
import { useBreakpoint } from 'MediaQueriesProvider'

export const usePreloadedSlide = () => {
  const breakpoints = useBreakpoint()
  const cards = useMemo(() => {
    let result: number[] = []
    const count = 3
    for (let i = 0; i < count; i++) {
      result.push(i)
    }
    return result
  }, [])

  return (
    <ComponentThemeProvider themes={themes}>
      <Container>
        {cards.map((item, idx) => {
          const key =
            Date.now().toString(36) + Math.random().toString(36).substr(2, 9)
          return (
            <CardWrapper key={`slideTrueCar${key}${idx}`}>
              {!breakpoints.mobile ? (
                <CarCardSearchRow />
              ) : (
                <CarCardSearchColumn />
              )}
            </CardWrapper>
          )
        })}
      </Container>
    </ComponentThemeProvider>
  )
}
