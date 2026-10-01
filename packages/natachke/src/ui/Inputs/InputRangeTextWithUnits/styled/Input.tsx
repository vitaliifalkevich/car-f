import styled from 'styled-components'
import { FieldInputProps } from 'react-final-form'

const Input = styled.input<FieldInputProps<string>>`
  background-color: ${({ theme }) => theme.colors.inputBackgroundColor};
  border: none;
  border-radius: 10px;
  font-size: 14px;
  width: 100%;
  box-shadow: none;
  font-family: ${props => props.theme.fonts.ralewayRegular};
  padding: 0 10px;
  min-height: 42px;
  color: ${props => props.theme.colors.titleColor};

  &:hover {
    background: ${props => props.theme.colors.inputBackgroundColor};
  }

  &:focus,
  &:active {
    background: ${props => props.theme.colors.inputBackgroundColor};
  }

  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  &[type='number'] {
    -moz-appearance: textfield;
  }
`

export default Input
