import React from 'react'
import { Link } from 'react-router-dom'
import Modal from 'ui/Modal'
import plus from 'assets/icons/plus.svg'
import ComponentThemeProvider from 'styles/theme/ComponentThemeProvider'
import themes from './themes'
import ModalTitle from 'ui/Modal/ModalTitle'
import { useTranslation } from 'react-i18next'
import { Container, Content, FirstAdText } from './styled'
import MainButton from 'ui/MainButton'
import { useGenerateUrlWithLang } from 'hooks'

const Welcome: React.FC = () => {
  const { t } = useTranslation()
  const generateUrlWithLang = useGenerateUrlWithLang()

  return (
    <Modal width="350px" height="362px" padding="0">
      <ComponentThemeProvider themes={themes}>
        <Container>
          <ModalTitle>{t('welcome.title')}</ModalTitle>
          <Content>
            <FirstAdText>{t('welcome.description')}</FirstAdText>
            {/*<DiscountText>*/}
            {/*  {t('welcome.discountOnThePaidServices')}*/}
            {/*</DiscountText>*/}
            <Link to={generateUrlWithLang(`/sell`)}>
              <MainButton color="green" icon={plus}>
                {t('sellCar')}
              </MainButton>
            </Link>
          </Content>
        </Container>
      </ComponentThemeProvider>
    </Modal>
  )
}

export default Welcome
