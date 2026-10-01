import React, { useCallback, useMemo } from 'react'
import ComponentThemeProvider from 'styles/theme/ComponentThemeProvider'
import themes from './themes'
import { Select, DropdownIndicator } from './styled'
import { StylesConfig } from 'react-select'
import { IOption } from 'hooks'
import { useTranslation } from 'react-i18next'

const styles: StylesConfig = {
  control: css => ({ ...css, paddingLeft: '1rem' }),
}

interface InputTextSelectProps {
  onChange: (value) => void
  options: IOption[]
  value?: IOption
  placeholder?: string
  defaultValue?: any
}

const InputTextSelect: React.FC<InputTextSelectProps> = ({
  placeholder,
  ...props
}) => {
  const { t } = useTranslation()
  const filterOptions = useCallback(
    (data: IOption[], result = []) => {
      data.forEach(item => {
        if (item.value !== props?.value?.value)
          return (result = [...result, item])
      })
      return result
    },
    [props],
  )

  const filteredOptions = useMemo(() => {
    return filterOptions(props.options)
  }, [filterOptions, props.options])
  return (
    <ComponentThemeProvider themes={themes}>
      <div>
        <Select
          {...props}
          options={filteredOptions}
          isSearchable={false}
          classNamePrefix="react-select"
          placeholder={placeholder ? placeholder : t('select')}
          components={{
            DropdownIndicator,
          }}
          styles={styles}
        />
      </div>
    </ComponentThemeProvider>
  )
}

export default InputTextSelect
