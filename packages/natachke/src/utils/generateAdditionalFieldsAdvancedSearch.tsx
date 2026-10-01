import React, { ReactNode } from 'react'

const prepareItemsToIteration = (
  Components,
  id,
  mainIndex,
  Wrapper,
): ReactNode[] => {
  const tmpResultsToWrap: React.ReactNode[] = []
  const tmpResultsNotWrap: React.ReactNode[] = []

  Components.forEach((item, idx) => {
    if (idx < 3) tmpResultsToWrap.push(item(id, mainIndex))
    else tmpResultsNotWrap.push(item(id, mainIndex))
  })
  return [
    <Wrapper key={`cars_brand_model_${id}`}>{tmpResultsToWrap}</Wrapper>,
    ...tmpResultsNotWrap,
  ]
}

export const generateAdditionalFieldsAdvancedSearch = (
  Components,
  numbers: string[],
  Wrapper: React.FC,
) => {
  const result: React.ReactNode[] = []

  numbers.forEach((number, idx) => {
    const iterationItems = prepareItemsToIteration(
      Components,
      number,
      idx,
      Wrapper,
    )
    result.push(iterationItems)
  })

  return result
}
