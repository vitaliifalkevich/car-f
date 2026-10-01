import React, { useCallback } from 'react'
import ComponentThemeProvider from 'styles/theme/ComponentThemeProvider'
import { InputWrapper, Container, Input } from './styled'
import themes from './themes'
import Label from 'ui/Inputs/Label'
import { InputSelect } from 'ui/Inputs'
import { IGroupedOption, IOption } from 'hooks'

interface InputTextProps {
  inputName?: string
  labelText?: string
  onChange: (newValue: any) => void
  value?: any
  alignLabel?: 'left' | 'top'
  label?: React.ReactNode
  placeholder?: string
  max?: number
  options: IOption[] | IGroupedOption[]
}

const InputTextWithUnits: React.FC<InputTextProps> = ({
  alignLabel = 'top',
  labelText,
  inputName,
  label,
  placeholder,
  value,
  onChange,
  options,
  ...props
}) => {
  const onChangeHandler = useCallback(
    newValue => {
      onChange({ ...value, value: newValue.target.value })
    },
    [onChange, value],
  )

  const onChangeUnitsHandler = useCallback(
    newValue => {
      onChange({ ...value, units: newValue })
    },
    [onChange, value],
  )
  return (
    <ComponentThemeProvider themes={themes}>
      <InputWrapper alignLabel={alignLabel}>
        {labelText && <Label htmlFor={inputName}>{labelText}</Label>}
        {label}
        <Container>
          <Input
            {...props}
            defaultValue={value?.value}
            onBlur={onChangeHandler}
            placeholder={placeholder}
          />
        </Container>
        <InputSelect
          {...props}
          value={value.units}
          onChange={onChangeUnitsHandler}
          options={options}
        />
      </InputWrapper>
    </ComponentThemeProvider>
  )
}

export default InputTextWithUnits
