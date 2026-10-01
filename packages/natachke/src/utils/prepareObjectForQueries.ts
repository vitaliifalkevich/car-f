const useUnitsInRange = (key, item) => {
  const preparedItem = {}
  if ((item?.from || item?.to) && item?.units) {
    if (item?.from)
      preparedItem[`${key}_${item.units.value}_from`] =
        item.from?.value || item.from
    if (item?.to)
      preparedItem[`${key}_${item.units.value}_to`] = item.to?.value || item.to
  } else if (item?.from || item?.to) {
    if (item?.from) preparedItem[`${key}_from`] = item.from?.value || item.from
    if (item?.to) preparedItem[`${key}_to`] = item.to?.value || item.to
  }
  return preparedItem
}

export const prepareObjectForQueries = (
  data: any,
  decorator?: 'useUnitsInRange',
) => {
  return Object.keys(data).reduce((acc, item) => {
    if (typeof data[item] === 'string' || typeof data[item] === 'boolean')
      return {
        ...acc,
        [item]: data[item],
      }
    if (Array.isArray(data[item])) {
      return {
        ...acc,
        [item]: data[item].map(item => item?.value || item),
      }
    }
    if (data[item]?.value) {
      return {
        ...acc,
        [item]: data[item].value,
      }
    }
    if (decorator === 'useUnitsInRange')
      return {
        ...acc,
        ...useUnitsInRange(item, data[item]),
      }
    if (data[item]?.from || data[item]?.to) {
      const preparedItem = {}
      if (data[item]?.from)
        preparedItem[`${item}_from`] = data[item].from?.value || data[item].from
      if (data[item]?.to)
        preparedItem[`${item}_to`] = data[item].to?.value || data[item].to

      return {
        ...acc,
        ...preparedItem,
      }
    }
    return acc
  }, {})
}
