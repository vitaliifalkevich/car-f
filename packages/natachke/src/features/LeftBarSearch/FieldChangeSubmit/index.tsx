import React, { useCallback } from 'react'
import { Field } from 'react-final-form'

interface FieldChangeSubmitProps {
  Component: React.FC<any>
  name: string
  type?: string
  value?: string
  id?: string
  values: any
  handleSubmit: (value: any) => void
}

const FieldChangeSubmit: React.FC<FieldChangeSubmitProps> = ({
  Component,
  name,
  value,
  values,
  handleSubmit,
  type,
  id,
}) => {
  const onChangeHandler = useCallback(
    (onChange: (values: any) => void) => value => {
      onChange(value)
      handleSubmit(values)
    },
    [handleSubmit, values],
  )

  return (
    <div>
      <Field
        name={name}
        type={type}
        value={value}
        id={id}
        render={({ input }) =>
          Component(input, onChangeHandler(input.onChange))
        }
      />
    </div>
  )
}

export default FieldChangeSubmit
