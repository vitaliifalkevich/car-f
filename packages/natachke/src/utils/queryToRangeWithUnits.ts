export const queryToRangeWithUnits = (data, property, availableUnits) => {
  const prepared = {}
  Object.keys(data).forEach(key => {
    if (key.indexOf(property) === -1) return
    const splitKey = key.split('_')
    prepared[`${splitKey[splitKey.length - 1]}`] = data[key]
    prepared['units'] = availableUnits.find(
      item => item.value === splitKey[splitKey.length - 2],
    )
  })
  return prepared
}
