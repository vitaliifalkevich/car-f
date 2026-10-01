export const generateSetOfPrevDates = count => {
  const result: Date[] = []
  for (let i = 0; i < count; i++) {
    const d = new Date()
    d.setDate(d.getDate() - i)
    result.push(d)
  }

  return result
}

export const generateSetOfPrevDatesInverse = count => {
  const result: Date[] = []
  for (let i = 1; i <= count; i++) {
    const d = new Date()
    d.setDate(d.getDate() - count + i)
    result.push(d)
  }

  return result
}
