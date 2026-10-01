import React, { useMemo } from 'react'
import { useModelOptionsByBrandName } from 'hooks'
import { AnyObject, useFormState } from 'react-final-form'
import { InputSelect } from 'ui/Inputs'
import { useTranslation } from 'react-i18next'
import Label from '../../../Label'
import FieldChangeSubmit from '../../../FieldChangeSubmit'

interface ModelProps {
  values: any
  handleSubmit: (
    event?: Partial<
      Pick<React.SyntheticEvent, 'preventDefault' | 'stopPropagation'>
    >,
  ) => Promise<AnyObject | undefined> | undefined
}

const Model: React.FC<ModelProps> = ({ values, handleSubmit }) => {
  const { t } = useTranslation()
  const formState = useFormState()

  const brandValue = useMemo(() => formState.values?.brand?.value, [
    formState.values,
  ])
  const modelOptions = useModelOptionsByBrandName(brandValue)

  return (
    <FieldChangeSubmit
      name="model"
      Component={(input, onChangeHandler) => (
        <InputSelect
          {...input}
          onChange={event => {
            onChangeHandler(event)
          }}
          isMulti={true}
          options={modelOptions}
          noOptionsMessage={t('selectBrandFirst')}
          label={<Label htmlFor="model">{t('selectModel')}</Label>}
        />
      )}
      values={values}
      handleSubmit={handleSubmit}
    />
  )
}

export default Model
