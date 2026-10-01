import React from 'react'
import ComponentThemeProvider from 'styles/theme/ComponentThemeProvider'
import { InputWrapper, Container, Input, Line } from './styled'
import themes from './themes'
import Label from 'ui/Inputs/Label'
import { InputSelect } from 'ui/Inputs'
import { useTranslation } from 'react-i18next'
import { IGroupedOption, IOption } from 'hooks'
import { Field } from 'react-final-form'

interface InputRangeTextProps {
  inputName?: string
  labelText?: string
  alignLabel?: 'left' | 'top'
  label?: React.ReactNode
  placeholderFrom?: string
  placeholderTo?: string
  max?: number
  options: IOption[] | IGroupedOption[]
  fieldName: string
  type?: string
}

const InputRangeTextWithUnits: React.FC<InputRangeTextProps> = ({
  alignLabel = 'top',
  labelText,
  inputName,
  label,
  placeholderFrom,
  placeholderTo,
  fieldName,
  options,
  type,
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
            type={type}
            render={({ input }) => (
              <Input
                {...input}
                placeholder={placeholderFrom ? placeholderFrom : t('from')}
              />
            )}
          />
          <Line />
          <Field
            name={`${fieldName}.to`}
            type={type}
            render={({ input }) => (
              <Input
                {...input}
                placeholder={placeholderTo ? placeholderTo : t('to')}
              />
            )}
          />
        </Container>
        <Field
          name={`${fieldName}.units`}
          render={({ input }) => <InputSelect {...input} options={options} />}
        />
      </InputWrapper>
    </ComponentThemeProvider>
  )
}

export default InputRangeTextWithUnits
