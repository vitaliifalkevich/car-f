import { useBreakpoint } from 'MediaQueriesProvider'
import React, { ReactNode, useCallback, useMemo } from 'react'
import ComponentThemeProvider from 'styles/theme/ComponentThemeProvider'
import themes from './themes'
import { Container } from './styled'
import { CarCardSlidePreloader } from 'ui/Loaders'

interface UsePreloadedSlideProps {
  desktopCount: number
  tabletCount: number
  countCardsInSlider: number
}

export const usePreloadedSlide = ({
  desktopCount,
  tabletCount,
  countCardsInSlider,
}: UsePreloadedSlideProps) => {
  const breakpoints = useBreakpoint()

  const cards = useMemo(() => {
    let result: number[] = []

    for (let i = 0; i < countCardsInSlider; i++) {
      result.push(i)
    }
    return result
  }, [countCardsInSlider])

  const generateSlide = useCallback(() => {
    const key =
      Date.now().toString(36) + Math.random().toString(36).substr(2, 9)

    return (
      <ComponentThemeProvider themes={themes} key={`${key}`}>
        <Container desktopCount={desktopCount} tabletCount={tabletCount}>
          {cards.map((item, idx) => (
            <CarCardSlidePreloader key={`${key}${item}${idx}`} />
          ))}
        </Container>
      </ComponentThemeProvider>
    )
  }, [cards, desktopCount, tabletCount])

  const contentToShow = useMemo((): ReactNode[] | null => {
    const item = generateSlide()
    return breakpoints.mobile || breakpoints.tablet
      ? [item, item, item]
      : [item, item, item]
  }, [breakpoints.mobile, breakpoints.tablet, generateSlide])

  if (!breakpoints) return null

  return contentToShow
}
