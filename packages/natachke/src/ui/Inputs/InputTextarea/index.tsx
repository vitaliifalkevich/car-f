import React from 'react'
import { InputWrapper, Textarea } from './styled'
import Label from 'ui/Inputs/Label'
import themes from './themes'
import ComponentThemeProvider from 'styles/theme/ComponentThemeProvider'

interface TextareaProps {
  inputName?: string
  labelText?: string
  onChange?: (newValue: any) => void
  value?: any
  placeholder?: string
  rows?: number
  defaultValue?: string
}

const InputTextarea: React.FC<TextareaProps> = ({
  inputName,
  labelText,
  rows = 7,
  ...props
}) => {
  return (
    <ComponentThemeProvider themes={themes}>
      <InputWrapper>
        {labelText && <Label htmlFor={inputName}>{labelText}</Label>}
        <Textarea {...props} rows={rows} />
      </InputWrapper>
    </ComponentThemeProvider>
  )
}

export default React.memo(InputTextarea)
