import React, { useMemo } from 'react'
import { useModelOptionsByBrandName } from 'hooks'
import { Field, useFormState } from 'react-final-form'
import { InputSelect } from 'ui/Inputs'
import { useTranslation } from 'react-i18next'

const Model: React.FC<{ modelsFromUrl?: string }> = ({ modelsFromUrl }) => {
  const { t } = useTranslation()
  const formState = useFormState()

  const brandValue = useMemo(() => formState.values?.brand?.value, [
    formState.values,
  ])
  const modelOptions = useModelOptionsByBrandName(brandValue)

  return (
    <Field
      name={`model`}
      render={({ input }) => (
        <InputSelect
          {...input}
          options={modelOptions}
          placeholder={t('selectModel')}
          isMulti={true}
        />
      )}
    />
  )
}

export default Model
