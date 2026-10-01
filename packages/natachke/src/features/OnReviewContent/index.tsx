import React from 'react'
import { useTranslation, Trans } from 'react-i18next'
import { useGenerateUrlWithLang } from '../../hooks'
import themes from '../Error404Content/themes'
import {
  BackgroundImage,
  ButtonWrapper,
  Container,
  Content,
  Description,
  SecondDescription,
  Wheel,
} from './styled'
import wheel from 'assets/img/wheel.svg'
import { Link } from 'react-router-dom'
import MainButton from 'ui/MainButton'
import searchIcon from 'assets/icons/search.svg'
import ComponentThemeProvider from 'styles/theme/ComponentThemeProvider'

const OnReviewContent: React.FC = () => {
  const { t } = useTranslation()

  const generateUrlWithLang = useGenerateUrlWithLang()
  return (
    <ComponentThemeProvider themes={themes}>
      <Container>
        <BackgroundImage />
        <Content>
          <Wheel src={wheel} alt="wheel" />
          <Description>{t('onTheReview')}</Description>
          <SecondDescription>{t('onTheReviewDescription')}</SecondDescription>
          <ButtonWrapper>
            <Link to={generateUrlWithLang(`/search`)}>
              <MainButton icon={searchIcon} color="blue">
                <Trans>{t('backToSearchMobile')}</Trans>
              </MainButton>
            </Link>
          </ButtonWrapper>
        </Content>
      </Container>
    </ComponentThemeProvider>
  )
}

export default OnReviewContent
