import React from 'react'
import ComponentThemeProvider from 'styles/theme/ComponentThemeProvider'
import themes from './themes'
import { Container, Icon, Text } from './styled'
import { useTranslation } from 'react-i18next'

const TopSearch: React.FC = () => {
  const { t } = useTranslation()
  return (
    <ComponentThemeProvider themes={themes}>
      <Container>
        <Icon />
        <Text>{t('topSearch')}</Text>
      </Container>
    </ComponentThemeProvider>
  )
}

export default TopSearch
