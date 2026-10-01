import React, { ReactNode, useMemo } from 'react'
import ComponentThemeProvider from 'styles/theme/ComponentThemeProvider'
import themes from './themes'
import { CardWrapper } from './styled'
import { CarPreviewSliderPreloader } from 'ui/Loaders'

export const usePreloadedSlide = () => {
  const cards = useMemo(() => {
    let result: number[] = []
    const count = 8
    for (let i = 0; i < count; i++) {
      result.push(i)
    }
    return result
  }, [])

  return useMemo((): ReactNode[] | null => {
    const key =
      Date.now().toString(36) + Math.random().toString(36).substr(2, 9)
    return cards.map((item, idx) => (
      <ComponentThemeProvider
        themes={themes}
        key={`slidePreviewCarSlide${key}${idx}`}
      >
        <CardWrapper>
          <CarPreviewSliderPreloader />
        </CardWrapper>
      </ComponentThemeProvider>
    ))
  }, [cards])
}
