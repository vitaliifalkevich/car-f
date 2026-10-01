import React, { useCallback, useState } from 'react'
import InputText from '../InputText'
import { InputProps } from '../types'

const InputPassword: React.FC<InputProps> = ({ onChange, ...props }) => {
  const [type, setType] = useState('password')

  const onHelperButtonClick = useCallback(() => {
    setType(type => (type === 'password' ? 'text' : 'password'))
  }, [])

  const onPasswordChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      if (!onChange) {
        return
      }

      const {
        target: { value },
      } = event
      const passAvailableSymbols = /\s+/g
      if (!value.match(passAvailableSymbols)) {
        onChange(event)
      }
    },
    [onChange],
  )

  return (
    <InputText
      {...props}
      type={type}
      helperButton={{
        type: 'eye',
        onClick: onHelperButtonClick,
        state: type === 'password' ? 'default' : 'switched',
      }}
      onChange={onPasswordChange}
    />
  )
}

export default React.memo(InputPassword)
