import React, { useCallback } from 'react'
import { InputSelect } from 'ui/Inputs'
import Label from '../Label'
import { Field, useForm } from 'react-final-form'
import { useGenerateBrandOptions } from 'hooks'
import { useDispatch, useSelector } from 'react-redux'
import { getCarOptionsData } from 'entities/Car/selectors'
import { actions } from 'entities/Car/slice'
import { useTranslation } from 'react-i18next'

const BrandSelect: React.FC = () => {
  const form = useForm()
  const { t } = useTranslation()
  const dispatch = useDispatch()
  const carOptionsData = useSelector(getCarOptionsData)
  const brandOptions = useGenerateBrandOptions(carOptionsData?.brands)
  const setCurrentBrand = useCallback(
    (brand: string) => {
      dispatch(actions.startGettingModelsByBrand(brand))
    },
    [dispatch],
  )
  return (
    <Field
      name="brand"
      render={({ input }) => {
        return (
          <InputSelect
            {...input}
            isClearable={true}
            onChange={event => {
              input.onChange(event)
              if (event?.value) setCurrentBrand(event.value)
              // reset models if model is changed
              form.change('model', undefined)
            }}
            options={brandOptions}
            label={<Label htmlFor="brand">{t('brand')}</Label>}
          />
        )
      }}
    />
  )
}

export default BrandSelect
