import config from 'config'
const { horsePowerToKwt } = config
interface Data {
  from?: string | number | { value: string | number }
  to?: string | number | { value: string | number }
  units?: { value: string | number }
}

interface IResponse {
  [PROPERTY: string]: string
}
export const generateFromToSearchPower = (
  data: Data,
  property: string,
): IResponse => {
  const result = {}

  if (data?.from) {
    const valueFrom =
      typeof data?.from === 'string' || typeof data?.from === 'number'
        ? Number(data?.from)
        : Number(data?.from?.value)

    result[`${property}_kwt_from`] =
      data?.units?.value === 'horsePower'
        ? Number((valueFrom * horsePowerToKwt).toFixed(2))
        : valueFrom
  }
  if (data?.to) {
    const valueTo =
      typeof data?.to === 'string' || typeof data?.to === 'number'
        ? Number(data?.to)
        : Number(data?.to?.value)

    result[`${property}_kwt_to`] =
      data?.units?.value === 'horsePower'
        ? Number((valueTo * horsePowerToKwt).toFixed(2))
        : valueTo
  }

  return result
}
