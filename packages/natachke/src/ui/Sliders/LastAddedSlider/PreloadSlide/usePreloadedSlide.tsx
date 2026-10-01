import { useBreakpoint } from 'MediaQueriesProvider'
import React, { ReactNode, useCallback, useMemo } from 'react'
import ComponentThemeProvider from 'styles/theme/ComponentThemeProvider'
import themes from './themes'
import { CardWrapper, Container } from './styled'
import { CarCardSlidePreloader } from '../../../Loaders'

export const usePreloadedSlide = () => {
  const breakpoints = useBreakpoint()

  const cards = useMemo(() => {
    let result: number[] = []
    const count = breakpoints.mobile ? 2 : breakpoints.tablet ? 3 : 4
    for (let i = 0; i < count; i++) {
      result.push(i)
    }
    return result
  }, [breakpoints])

  const generateSlide = useCallback(() => {
    const key =
      Date.now().toString(36) + Math.random().toString(36).substr(2, 9)

    return (
      <ComponentThemeProvider themes={themes} key={`${key}`}>
        <Container>
          {cards.map((item, idx) => (
            <CardWrapper key={`slideLastAdded${key}${idx}`}>
              <CarCardSlidePreloader />
            </CardWrapper>
          ))}
        </Container>
      </ComponentThemeProvider>
    )
  }, [cards])

  const contentToShow = useMemo((): ReactNode[] | null => {
    const item = generateSlide()
    return breakpoints.mobile || breakpoints.tablet
      ? [item, item]
      : [item, item, item]
  }, [breakpoints.mobile, breakpoints.tablet, generateSlide])

  if (!breakpoints) return null

  return contentToShow
}
