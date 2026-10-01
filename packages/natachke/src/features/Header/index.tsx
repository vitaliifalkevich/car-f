import React from 'react'
import { Link } from 'react-router-dom'
import ComponentThemeProvider from 'styles/theme/ComponentThemeProvider'
import themes from './themes'
import plus from 'assets/icons/plus.svg'
import { Container, Content, Logo, Slogan, ButtonWrapper } from './styled'
import { useTranslation } from 'react-i18next'
import Favorites from './Favorites'
import User from './User'
import MainButton from 'ui/MainButton'
import Languages from './Languages'
import { useBreakpoint } from '../../MediaQueriesProvider'
import { useGenerateUrlWithLang } from 'hooks'

const Header: React.FC = () => {
  const { t } = useTranslation()
  const breakpoints = useBreakpoint()
  const generateUrlWithLang = useGenerateUrlWithLang()
  return (
    <header>
      <ComponentThemeProvider themes={themes}>
        <div>
          <Container>
            <Content>
              <div>
                <Logo />
                {!breakpoints.tablet && !breakpoints.mobile && (
                  <Slogan>{t('slogan')}</Slogan>
                )}
              </div>
              <div>
                <Favorites />
                <User />
                <ButtonWrapper>
                  <Link to={generateUrlWithLang(`/sell`)}>
                    <MainButton icon={plus}>
                      {!breakpoints.mobile && t('sellCar')}
                    </MainButton>
                  </Link>
                </ButtonWrapper>
                <Languages />
              </div>
            </Content>
          </Container>
        </div>
      </ComponentThemeProvider>
    </header>
  )
}

export default Header
