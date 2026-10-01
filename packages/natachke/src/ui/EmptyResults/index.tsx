import React from 'react'
import ComponentThemeProvider from 'styles/theme/ComponentThemeProvider'
import themes from './themes'
import MainButton from '../MainButton'
import { Container, Text } from './styled'

interface EmptyResultsProps {
  text: string | React.ReactElement
  action?: () => void
  actionText?: string
  actionIcon?: string
}

const EmptyResults: React.FC<EmptyResultsProps> = ({
  text,
  actionText,
  action,
  actionIcon,
}) => {
  return (
    <ComponentThemeProvider themes={themes}>
      <Container>
        <Text>{text}</Text>

        {action && actionText ? (
          <MainButton icon={actionIcon} color="grey" onClick={action}>
            {actionText}
          </MainButton>
        ) : null}
      </Container>
    </ComponentThemeProvider>
  )
}

export default EmptyResults
