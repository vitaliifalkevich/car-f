import React, { useMemo } from 'react'
import { Container, Item } from './styled'
import ComponentThemeProvider from 'styles/theme/ComponentThemeProvider'
import themes from './themes'
import { useBreakpoint } from 'MediaQueriesProvider'

export type Value = string | number | boolean

interface ButtonGroupProps {
  options: {
    value: Value
    label: string
    icon?: React.FC
  }[]
  onClick?: (value: Value) => void
  onChange?: (event: React.ChangeEvent | any) => void
  value: Value
  fontSize?: string
}

const ButtonsGroup: React.FC<ButtonGroupProps> = ({
  options,
  value,
  fontSize,
  ...props
}) => {
  const itemWidth = useMemo(() => 100 / options.length, [options.length])
  const breakpoints = useBreakpoint()

  return (
    <ComponentThemeProvider themes={themes}>
      <Container withIcon={!!options[0].icon}>
        {options.map(item => (
          <Item
            fontSize={fontSize}
            key={`${item.value}_${item.label}`}
            onClick={() => {
              if (props?.onClick) props?.onClick?.(item.value)
              if (props?.onChange) props?.onChange?.(item.value)
            }}
            value={item.label}
            itemWidth={itemWidth}
            active={value === item.value}
            withIcon={!!item.icon}
          >
            {breakpoints.mobile && item?.icon ? <item.icon /> : null}
            <span>{item.label}</span>
          </Item>
        ))}
      </Container>
    </ComponentThemeProvider>
  )
}

export default React.memo(ButtonsGroup)
