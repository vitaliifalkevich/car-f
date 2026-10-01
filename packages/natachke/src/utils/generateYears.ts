export const generateYears = ({ start = 1970 }: { start?: number } = {}) => {
  const end = Number(new Date().getFullYear())
  let result: { value: number; label: string }[] = []
  for (let i = end; i >= start; i--) {
    result.push({ value: i, label: String(i) })
  }
  return result
}
