import React, { useCallback, useMemo } from 'react'
import { createFilter } from './createFilter'
import {
  InputWrapper,
  Select,
  DropdownIndicator,
  Option,
  Control,
  MultiValueLabel,
  MultiValue,
} from './styled'
import Label from 'ui/Inputs/Label'
import themes from './themes'
import ComponentThemeProvider from 'styles/theme/ComponentThemeProvider'
import { useTranslation } from 'react-i18next'
import { StylesConfig } from 'react-select'
import { IGroupedOption, IOption } from 'hooks'

interface InputSelectProps {
  inputName?: string
  labelText?: string
  options: IOption[] | IGroupedOption[]
  onChange?: (newValue: any) => void
  value?: any
  callSubmit?: () => void
  isDisabled?: boolean
  isSearchable?: boolean
  placeholder?: string
  alignLabel?: 'left' | 'top'
  label?: React.ReactNode
  fixedIcon?: string
  onBlur?: (newValue: any) => void
  isMulti?: boolean
  defaultValue?: any
  isClearable?: boolean
  noOptionsMessage?: string
}

const styles: StylesConfig = {
  control: css => ({ ...css, paddingLeft: '1rem' }),
}
const groupStyles = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
}
const formatGroupLabel = data => (
  <div style={groupStyles}>
    <span>{data.label}</span>
  </div>
)

const InputSelect: React.FC<InputSelectProps> = ({
  alignLabel = 'top',
  label,
  inputName,
  labelText,
  onChange,
  callSubmit,
  placeholder,
  isMulti,
  isClearable,
  noOptionsMessage,
  ...props
}) => {
  const { t } = useTranslation('translation')
  // const [filteredOptions, setFilteredOptions] = useState<
  //   Array<IOption | IGroupedOption>
  // >(props.options)
  //
  // useEffect(() => {
  //   if (!filteredOptions && props.options.length > 0)
  //     setFilteredOptions(props.options)
  // }, [filteredOptions, props.options])

  const onChangeHandler = useCallback(
    event => {
      if (onChange) onChange(event)
      if (callSubmit) callSubmit()
    },
    [callSubmit, onChange],
  )

  // const handleInputChange = inputValue => {
  //   const filtered = searchByTitleWithTransliterate(
  //     props.options,
  //     inputValue.toLowerCase(),
  //   )
  //
  //   setFilteredOptions(filtered)
  // }

  const filterConfig = useMemo(
    () => ({
      ignoreCase: true,
      ignoreAccents: true,
      trim: true,
      matchFrom: 'start' as const,
    }),
    [],
  )

  return (
    <ComponentThemeProvider themes={themes}>
      <InputWrapper alignLabel={alignLabel}>
        {labelText && <Label htmlFor={inputName}>{labelText}</Label>}
        {label}
        <Select
          {...props}
          isClearable={isClearable}
          // onInputChange={handleInputChange}
          // options={filteredOptions}
          options={props.options}
          filterOption={createFilter(filterConfig)}
          noOptionsMessage={() =>
            noOptionsMessage ? noOptionsMessage : t('emptyOptions')
          }
          // filterOption={null}
          // isLoading={props.options.length === 0}
          classNamePrefix="react-select"
          hideSelectedOptions={true}
          isSearchable={true}
          placeholder={placeholder ? placeholder : t('select')}
          onChange={onChangeHandler}
          isMulti={isMulti}
          components={{
            DropdownIndicator,
            Option,
            Control,
            // @ts-ignore
            MultiValue,
            MultiValueLabel,
          }}
          styles={styles}
          formatGroupLabel={formatGroupLabel}
        />
      </InputWrapper>
    </ComponentThemeProvider>
  )
}

export default React.memo(InputSelect)
