import React from 'react'
import { Field } from 'react-final-form'
import ComponentThemeProvider from 'styles/theme/ComponentThemeProvider'
import { InputWrapper, Container, Input, Line } from './styled'
import themes from './themes'
import Label from 'ui/Inputs/Label'
import { useTranslation } from 'react-i18next'

interface InputRangeTextProps {
  inputName?: string
  labelText?: string
  alignLabel?: 'left' | 'top'
  label?: React.ReactNode
  placeholderFrom?: string
  placeholderTo?: string
  max?: number
  fieldName: string
  type?: string
  onChangeHandler?: () => void
}

const InputRangeText: React.FC<InputRangeTextProps> = ({
  alignLabel = 'top',
  labelText,
  inputName,
  label,
  placeholderFrom,
  placeholderTo,
  fieldName,
  onChangeHandler,
  ...props
}) => {
  const { t } = useTranslation()

  return (
    <ComponentThemeProvider themes={themes}>
      <InputWrapper alignLabel={alignLabel}>
        {labelText && <Label htmlFor={inputName}>{labelText}</Label>}
        {label}
        <Container>
          <Field
            name={`${fieldName}.from`}
            render={({ input }) => (
              <Input
                {...input}
                onChange={event => {
                  input.onChange(event)
                  onChangeHandler?.()
                }}
                placeholder={placeholderFrom ? placeholderFrom : t('from')}
              />
            )}
          />

          <Line />
          <Field
            name={`${fieldName}.to`}
            render={({ input }) => (
              <Input
                {...input}
                onChange={event => {
                  input.onChange(event)
                  onChangeHandler?.()
                }}
                placeholder={placeholderTo ? placeholderTo : t('to')}
              />
            )}
          />
        </Container>
      </InputWrapper>
    </ComponentThemeProvider>
  )
}

export default InputRangeText
