interface Data {
  from?: string | number | { value: string | number }
  to?: string | number | { value: string | number }
  units?: { value: string | number }
}

interface IResponse {
  [PROPERTY: string]: string
}
export const generateFromToWithUnits = (
  data: Data,
  property: string,
  format: 'string' | 'number',
): IResponse => {
  const result = {}
  const FormatConverter = format === 'string' ? String : Number
  if (data?.from) {
    result[`${property}_${data?.units?.value}_from`] =
      typeof data?.from === 'string' || typeof data?.from === 'number'
        ? FormatConverter(data?.from)
        : FormatConverter(data?.from?.value)
  }
  if (data?.to) {
    result[`${property}_${data?.units?.value}_to`] =
      typeof data?.to === 'string' || typeof data?.to === 'number'
        ? FormatConverter(data?.to)
        : FormatConverter(data?.to?.value)
  }

  return result
}
