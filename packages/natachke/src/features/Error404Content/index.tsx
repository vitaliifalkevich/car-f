import React from 'react'
import { Link } from 'react-router-dom'
import ComponentThemeProvider from 'styles/theme/ComponentThemeProvider'
import themes from './themes'
import {
  Container,
  Content,
  BackgroundImage,
  Title,
  Description,
  SecondDescription,
  ButtonWrapper,
} from './styled'
import homeIcon from 'assets/icons/homeIcon.svg'
import MainButton from 'ui/MainButton'
import { useTranslation } from 'react-i18next'
import { useGenerateUrlWithLang } from 'hooks'

const Error404Content: React.FC = () => {
  const { t } = useTranslation()
  const generateUrlWithLang = useGenerateUrlWithLang()
  return (
    <main>
      <ComponentThemeProvider themes={themes}>
        <Container>
          <BackgroundImage />
          <Content>
            <Title>404</Title>
            <Description>{t('pageNotFound')}</Description>
            <SecondDescription>
              {t('pageNotFoundDescription')}
            </SecondDescription>
            <ButtonWrapper>
              <Link to={generateUrlWithLang('/')}>
                <MainButton icon={homeIcon} color="blue">
                  {t('toHome')}
                </MainButton>
              </Link>
            </ButtonWrapper>
          </Content>
        </Container>
      </ComponentThemeProvider>
    </main>
  )
}

export default Error404Content
