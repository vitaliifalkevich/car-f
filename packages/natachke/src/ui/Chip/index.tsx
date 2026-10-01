import React from 'react'
import ComponentThemeProvider from 'styles/theme/ComponentThemeProvider'
import themes from './themes'
import { Container, Text, RemoveIcon } from './styled'

interface ChipProps {
  text: string
  onDelete: () => void
}

const Chip: React.FC<ChipProps> = ({ text, onDelete }) => {
  return (
    <ComponentThemeProvider themes={themes}>
      <Container>
        <Text>{text}</Text>
        <RemoveIcon onClick={onDelete} />
      </Container>
    </ComponentThemeProvider>
  )
}

export default Chip
