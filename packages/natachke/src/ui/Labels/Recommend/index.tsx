import React from 'react'
import ComponentThemeProvider from 'styles/theme/ComponentThemeProvider'
import themes from './themes'
import { Container, Icon, Text } from './styled'
import { useTranslation } from 'react-i18next'
import { useBreakpoint } from '../../../MediaQueriesProvider'

const Recommend: React.FC = () => {
  const { t } = useTranslation()
  const breakpoints = useBreakpoint()
  return (
    <ComponentThemeProvider themes={themes}>
      <Container>
        <Icon />
        {!breakpoints.mobile && <Text>{t('recommend')}</Text>}
      </Container>
    </ComponentThemeProvider>
  )
}

export default Recommend
