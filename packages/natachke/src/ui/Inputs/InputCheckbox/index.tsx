import React from 'react'
import ComponentThemeProvider from 'styles/theme/ComponentThemeProvider'
import themes from './themes'
import { Label } from './styled'

interface InputCheckboxProps {
  label: string
  id: string
  onChangeHandler?: (value: any) => void
  onChange: (event: React.ChangeEvent | any) => void
}

const InputCheckbox: React.FC<InputCheckboxProps> = ({
  label,
  id,
  onChangeHandler,
  onChange,
  ...props
}) => {
  return (
    <ComponentThemeProvider themes={themes}>
      <div>
        <Label htmlFor={id}>
          {label}
          <input id={id} {...props} onChange={onChangeHandler || onChange} />
          <span />
        </Label>
      </div>
    </ComponentThemeProvider>
  )
}

export default InputCheckbox
