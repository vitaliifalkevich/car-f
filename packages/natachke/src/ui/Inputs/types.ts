import React from 'react'

export declare type Status = 'success' | 'error'
export declare type HelpButtonState = 'default' | 'switched'
export interface HelperButton {
  type?: 'success' | 'error' | 'copy' | 'eye'
  onClick?: () => void
  state?: HelpButtonState
}

export interface InputProps {
  id?: string
  name: string
  isDisabled?: boolean
  maxLength?: number
  type?: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  placeholder?: string
  labelText?: string
  helperButton?: HelperButton
  helperText?: {
    status: Status
    text: string
  }
  mask?: string
}
