import { useMemo } from 'react'

type UseGenerateSlideBlocks = {
  cards: Array<any> | null
  countCards: number
  countSlides?: number
  isMobile?: boolean
  cutPartial?: boolean
}

export const useGenerateSlideBlocks = ({
  cards,
  countCards,
  countSlides = 5,
  isMobile,
  cutPartial = false,
}: UseGenerateSlideBlocks): Array<any> => {
  return useMemo(() => {
    if (isMobile) return [cards]
    const blocks: Array<any> = []
    for (let i = 0; i < countSlides; i++) {
      const from = i * countCards
      const to = from + countCards

      if (cards && cards.length > from) {
        blocks.push(cards.slice(from, to))
      } else {
        break
      }
    }

    if (cutPartial && blocks[blocks.length - 1]?.length < countCards)
      blocks.pop()

    return blocks
  }, [isMobile, cards, cutPartial, countCards, countSlides])
}
