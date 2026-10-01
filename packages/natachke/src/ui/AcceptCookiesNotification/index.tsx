import React from 'react'
import ComponentThemeProvider from 'styles/theme/ComponentThemeProvider'
import { Link } from 'react-router-dom'
import { Container, Text } from './styled'
import { useTranslation } from 'react-i18next'
import { useGenerateUrlWithLang } from 'hooks'
import themes from './themes'
import SecondaryButton from 'ui/SecondaryButton'
import { useNotificationVisibility } from './useNotificationVisibility'

const AcceptCookiesNotification: React.FC = () => {
  const { t } = useTranslation()
  const generateUrlWithLang = useGenerateUrlWithLang()
  const {
    acceptCookiesHandler,
    isCookiesAccepted,
  } = useNotificationVisibility()

  if (isCookiesAccepted) return null

  return (
    <ComponentThemeProvider themes={themes}>
      <Container>
        <Text>
          {t('useCookiesDisclaimerPart1')}
          <Link to={generateUrlWithLang(`/privacy-policy`)}>
            {t('privacyPolicy')}
          </Link>
          {t('useCookiesDisclaimerPart2')}
        </Text>
        <SecondaryButton onClick={acceptCookiesHandler}>
          {t('accept')}
        </SecondaryButton>
      </Container>
    </ComponentThemeProvider>
  )
}

export default AcceptCookiesNotification
