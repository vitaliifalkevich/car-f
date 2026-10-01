import React from 'react'

const prepareItemsToIteration = (Components, id, idx) =>
  Components.map(item => item(id, idx))

export const generateAdditionalFields = (Components, numbers: string[]) => {
  const result: ((id: string, idx: number) => React.ReactNode)[] = []

  numbers.forEach((number, idx) => {
    const iterationItems = prepareItemsToIteration(Components, number, idx)
    result.push(iterationItems)
  })

  return result
}
