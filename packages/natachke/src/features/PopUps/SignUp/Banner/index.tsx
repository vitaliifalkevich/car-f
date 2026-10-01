import React from 'react'
import ComponentThemeProvider from 'styles/theme/ComponentThemeProvider'
import themes from './themes'
import {
  Container,
  Content,
  Title,
  Description,
  SecondDescription,
  BottomDescription,
} from './styled'
import { useTranslation, Trans } from 'react-i18next'

const Banner: React.FC = () => {
  const { t } = useTranslation()
  return (
    <ComponentThemeProvider themes={themes}>
      <Container>
        <Content>
          <Title>1k+</Title>
          <Description>
            <Trans>{t('usersOnTheSite')}</Trans>
          </Description>
          <SecondDescription>{t('soldTheirCars')}</SecondDescription>
          <BottomDescription>{t('areYouWithUs')}</BottomDescription>
        </Content>
      </Container>
    </ComponentThemeProvider>
  )
}

export default Banner
