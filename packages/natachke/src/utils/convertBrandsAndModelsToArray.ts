export const convertBrandsAndModelsToArray = data => {
  const brand: string[] = []
  const model: string[] = []
  const tmpObject = Object.keys(data).reduce((acc, item) => {
    const isBrand = item.search('brand') > -1
    const isModel = item.search('model') > -1
    if (isBrand) {
      brand.push(data[item])
      return acc
    }
    if (isModel) {
      model.push(data[item])
      return acc
    }
    return {
      ...acc,
      [item]: data[item],
    }
  }, {})

  if (brand.length === 0 && model.length === 0) return tmpObject

  if (model.length === 0 && brand.length > 0)
    return {
      ...tmpObject,
      brand,
    }

  return {
    ...tmpObject,
    brand,
    model,
  }
}
