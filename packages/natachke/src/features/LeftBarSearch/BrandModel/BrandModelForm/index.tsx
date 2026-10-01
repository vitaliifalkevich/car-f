import React, { useCallback, Suspense } from 'react'
import { AnyObject, useForm } from 'react-final-form'
import { InputSelect } from 'ui/Inputs'
import { useTranslation } from 'react-i18next'
import { useGenerateBrandOptions } from 'hooks'
import { useDispatch, useSelector } from 'react-redux'
import { getCarOptionsData } from 'entities/Car/selectors'
import { actions } from 'entities/Car/slice'
import Model from './Model'
import Label from '../../Label'
import FieldChangeSubmit from '../../FieldChangeSubmit'

interface BrandModelFormProps {
  values: any
  handleSubmit: (
    event?: Partial<
      Pick<React.SyntheticEvent, 'preventDefault' | 'stopPropagation'>
    >,
  ) => Promise<AnyObject | undefined> | undefined
}
const BrandModelForm: React.FC<BrandModelFormProps> = ({
  values,
  handleSubmit,
}) => {
  const dispatch = useDispatch()
  const carOptionsData = useSelector(getCarOptionsData)
  const brandOptions = useGenerateBrandOptions(carOptionsData?.brands)
  const { t } = useTranslation()
  const form = useForm()

  const getModelsForCurrentBrand = useCallback(
    (brand: string) => {
      dispatch(actions.startGettingModelsForBrands(brand))
    },
    [dispatch],
  )

  return (
    <>
      <FieldChangeSubmit
        name="brand"
        Component={(input, onChangeHandler) => (
          <InputSelect
            {...input}
            onChange={event => {
              onChangeHandler(event)
              if (event?.value) getModelsForCurrentBrand(event?.value)
              // reset models if model is changed
              form.change(`model`, undefined)
            }}
            options={brandOptions}
            label={<Label htmlFor="brand">{t('brand')}</Label>}
          />
        )}
        values={values}
        handleSubmit={handleSubmit}
      />
      <Suspense fallback={false}>
        <Model values={values} handleSubmit={handleSubmit} />
      </Suspense>
    </>
  )
}

export default BrandModelForm
