import React from 'react'
import { Link } from 'react-router-dom'
import { Container } from './styled'
import { useGenerateUrlWithLang } from 'hooks'
import { useTranslation } from 'react-i18next'
import ComponentThemeProvider from 'styles/theme/ComponentThemeProvider'
import themes from './themes'

const TopCatalogLink: React.FC = () => {
  const { t } = useTranslation()
  const generateUrlWithLang = useGenerateUrlWithLang()
  return (
    <ComponentThemeProvider themes={themes}>
      <Container>
        <Link to={generateUrlWithLang('/top-catalog')}>
          {t('topCarCatalog')}
        </Link>
      </Container>
    </ComponentThemeProvider>
  )
}

export default TopCatalogLink
