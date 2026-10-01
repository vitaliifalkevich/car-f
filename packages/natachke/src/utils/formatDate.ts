import { format } from 'date-fns'

interface IFormat {
  date: Date
  withTime?: boolean
  onlyTime?: boolean
}

const formatDate = ({
  date,
  withTime = false,
  onlyTime = false,
}: IFormat): string => {
  if (onlyTime) return format(date, 'H:mm:ss')
  if (withTime) return format(date, 'H:mm dd.MM.yy')
  return format(date, 'dd.MM.yyyy')
}

export default formatDate
