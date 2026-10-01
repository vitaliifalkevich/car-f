import React, { useMemo } from 'react'
import ComponentThemeProvider from 'styles/theme/ComponentThemeProvider'
import { Value } from '../ButtonsGroup'
import { Container, Item } from './styled'
import themes from '../ButtonsGroup/themes'

interface ButtonsGroupTwoRowsProps {
  options: { value: Value; label: string }[]
  onClick?: (value: Value) => void
  onChange?: (event: React.ChangeEvent | any) => void
  value: Value
}

const ButtonsGroupTwoRows: React.FC<ButtonsGroupTwoRowsProps> = ({
  options,
  value,
  ...props
}) => {
  const itemWidth = useMemo(() => 100 / options.length, [options.length])
  return (
    <ComponentThemeProvider themes={themes}>
      <Container>
        {options.map((valueItem, idx) => (
          <Item
            key={`${valueItem.value}_${valueItem.label}_${idx}`}
            className={value === valueItem.value ? 'active-button' : 'initial'}
            onClick={() => {
              if (props?.onClick) props?.onClick?.(valueItem.value)
              if (props?.onChange) props?.onChange?.(valueItem.value)
            }}
            value={valueItem.label}
            itemWidth={itemWidth}
            active={value === valueItem.value}
          >
            {valueItem.label}
          </Item>
        ))}
      </Container>
    </ComponentThemeProvider>
  )
}

export default ButtonsGroupTwoRows
