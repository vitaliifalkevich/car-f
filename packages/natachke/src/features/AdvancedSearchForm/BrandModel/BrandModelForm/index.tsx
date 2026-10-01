import React, { useCallback, Suspense } from 'react'
import { FormItemContainer, OptionTitle } from '../../styled'
import { Field, useForm } from 'react-final-form'
import { InputSelect } from 'ui/Inputs'
import { useTranslation } from 'react-i18next'
import { useGenerateBrandOptions } from 'hooks'
import { useDispatch, useSelector } from 'react-redux'
import { getCarOptionsData } from 'entities/Car/selectors'
import { actions } from 'entities/Car/slice'
import Model from './Model'

const BrandModelForm: React.FC<{ modelsFromUrl?: string }> = ({
  modelsFromUrl,
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
    <FormItemContainer>
      <OptionTitle>
        {t('brand')}, {t('model')}
      </OptionTitle>
      <Field
        name="brand"
        render={({ input }) => {
          return (
            <InputSelect
              {...input}
              onChange={event => {
                input.onChange(event)
                if (event?.value) getModelsForCurrentBrand(event.value)
                // reset models if model is changed
                form.change(`model`, undefined)
              }}
              options={brandOptions}
              placeholder={t('selectBrand')}
            />
          )
        }}
      />
      <Suspense fallback={false}>
        <Model modelsFromUrl={modelsFromUrl} />
      </Suspense>
    </FormItemContainer>
  )
}

export default BrandModelForm
