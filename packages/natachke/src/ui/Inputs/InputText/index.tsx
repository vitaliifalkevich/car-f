import React from 'react'
import ComponentThemeProvider from 'styles/theme/ComponentThemeProvider'
import { Input, InputWrapper, HelperButton } from './styled'
import themes from './themes'
import Label from '../Label'
import { InputProps } from '../types'

const InputText: React.FC<InputProps> = ({
  placeholder,
  labelText,
  isDisabled,
  helperButton,
  ...props
}) => {
  return (
    <ComponentThemeProvider themes={themes}>
      <InputWrapper>
        {labelText && (
          <Label htmlFor={props.name} className="input-text-label">
            {labelText}
          </Label>
        )}
        <div>
          <Input {...props} placeholder={placeholder} disabled={isDisabled} />
          {helperButton && (
            <HelperButton
              type={helperButton.type}
              onClick={helperButton.onClick}
              state={helperButton.state}
            />
          )}
        </div>
      </InputWrapper>
    </ComponentThemeProvider>
  )
}

export default InputText
