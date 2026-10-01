import React from 'react'
import Label from 'ui/Inputs/Label'
import {
  InputWrapper,
  Select,
  DropdownIndicator,
  Option,
  Control,
  Container,
} from './styled'
import themes from './themes'
import ComponentThemeProvider from 'styles/theme/ComponentThemeProvider'
import { useTranslation } from 'react-i18next'
import { StylesConfig } from 'react-select'
import { Field } from 'react-final-form'

interface Option {
  label: string | number
  value: string | number
}

interface RangeSelectProps {
  inputName?: string
  labelText?: string
  callSubmit?: () => void
  isDisabled?: boolean
  isSearchable?: boolean
  alignLabel?: 'left' | 'top'
  label?: React.ReactNode
  optionsFrom: Option[]
  optionsTo: Option[]
  placeholderFrom?: string
  placeholderTo?: string
  fieldName: string
  onChangeHandler?: () => void
}

const styles: StylesConfig = {
  control: css => ({ ...css, paddingLeft: '1rem' }),
}

const RangeSelect: React.FC<RangeSelectProps> = ({
  alignLabel = 'top',
  label,
  inputName,
  labelText,
  optionsFrom,
  optionsTo,
  callSubmit = () => {},
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
              <Select
                {...input}
                options={optionsFrom}
                isClearable={true}
                onChange={event => {
                  input.onChange(event)
                  onChangeHandler?.()
                }}
                isSearchable={true}
                classNamePrefix="react-select"
                placeholder={placeholderFrom ? placeholderFrom : t('select')}
                components={{
                  DropdownIndicator,
                  Option,
                  Control,
                }}
                styles={styles}
              />
            )}
          />

          <Field
            name={`${fieldName}.to`}
            render={({ input }) => (
              <Select
                {...input}
                onChange={event => {
                  input.onChange(event)
                  onChangeHandler?.()
                }}
                isClearable={true}
                options={optionsTo}
                isSearchable={true}
                classNamePrefix="react-select"
                placeholder={placeholderTo ? placeholderTo : t('select')}
                components={{
                  DropdownIndicator,
                  Option,
                  Control,
                }}
                styles={styles}
              />
            )}
          />
        </Container>
      </InputWrapper>
    </ComponentThemeProvider>
  )
}

export default React.memo(RangeSelect)
