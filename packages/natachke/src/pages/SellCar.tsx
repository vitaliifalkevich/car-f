import React, { useMemo } from 'react'
import AddCar from 'features/AddCar'
import config, { CREATE_CAR_TYPE } from '../config'
import {
  useGeneratePhoneOptions,
  useGenerateSaleTypeOptions,
  usePowerUnitsOptions,
} from '../hooks'
const { defaultPhoneCode } = config

const SellCar: React.FC = () => {
  const saleTypeOptions = useGenerateSaleTypeOptions({ withoutAll: true })
  const powerOptions = usePowerUnitsOptions()
  const phoneOptions = useGeneratePhoneOptions()
  const initialValues = useMemo(
    () => ({
      sale_type: saleTypeOptions[0].value,
      isCustomsCleared: true,
      accidents: false,
      power: { units: powerOptions[0] },
      phone_code: phoneOptions.find(item => item?.value === defaultPhoneCode),
    }),
    [saleTypeOptions, powerOptions, phoneOptions],
  )
  return <AddCar type={CREATE_CAR_TYPE.CREATE} initialValues={initialValues} />
}

export default SellCar
