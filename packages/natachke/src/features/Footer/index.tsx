import React from 'react'
import ComponentThemeProvider from 'styles/theme/ComponentThemeProvider'
import themes from './themes'
import {
  Container,
  Content,
  Logo,
  Title,
  LinkWrapper,
  HR,
  CopyrightLinkWrapper,
  CopyrightContent,
  CopyrightText,
} from './styled'
import { useTranslation } from 'react-i18next'
import { useGenerateUrlWithLang } from 'hooks'
import { useBreakpoint } from '../../MediaQueriesProvider'
import { env } from '../../config'

const Footer: React.FC = () => {
  const { t } = useTranslation()
  const { t: tMeta } = useTranslation('meta')
  const breakpoints = useBreakpoint()
  const generateUrlWithLang = useGenerateUrlWithLang()
  return (
    <ComponentThemeProvider themes={themes}>
      <footer>
        <Container>
          {breakpoints.mobile && (
            <Content>
              <Logo />{' '}
            </Content>
          )}
          <Content>
            {!breakpoints.mobile && <Logo />}
            <div>
              <Title>{t('footer.usedCars.title')}</Title>
              <LinkWrapper>
                {/* eslint-disable-next-line*/}
                <a
                  href={generateUrlWithLang('/search?custom_clearance=false')}
                  rel="nofollow"
                >
                  {t('footer.usedCars.uncleared')}
                </a>
              </LinkWrapper>
              <LinkWrapper>
                <a
                  href={generateUrlWithLang('/search?custom_clearance=true')}
                  rel="nofollow"
                >
                  {t('footer.usedCars.cleared')}
                </a>
              </LinkWrapper>
              <LinkWrapper>
                <a
                  href={generateUrlWithLang('/search?mileage_to=100')}
                  rel="nofollow"
                >
                  {t('footer.usedCars.mileage_to_100')}
                </a>
              </LinkWrapper>
            </div>
            <div>
              <Title>{t('footer.services.title')}</Title>
              <LinkWrapper>
                <a
                  rel="nofollow noopener noreferrer"
                  target="_blank"
                  href="https://avtobazar.infocar.ua/rastamozhka.html"
                >
                  {t('footer.services.calculator')}
                </a>
              </LinkWrapper>
              <LinkWrapper>
                <a
                  href="https://vseazs.com/"
                  rel="nofollow noopener noreferrer"
                  target="_blank"
                >
                  {t('footer.services.fuelPrices')}
                </a>
              </LinkWrapper>
              <LinkWrapper>
                <a href={`mailto:${env.supportEmail}`} rel="nofollow">
                  {t('footer.services.contactUs')}
                </a>
              </LinkWrapper>
            </div>
            {/*<div>*/}
            {/*  <Title>{t('footer.carServices.title')}</Title>*/}
            {/*  <LinkWrapper>*/}
            {/*    /!* eslint-disable-next-line*!/*/}
            {/*    <a rel="nofollow">*/}
            {/*      {t('footer.carServices.dealers')}*/}
            {/*    </a>*/}
            {/*  </LinkWrapper>*/}
            {/*  <LinkWrapper>*/}
            {/*    /!* eslint-disable-next-line*!/*/}
            {/*    <a rel="nofollow">*/}
            {/*      {t('footer.carServices.sto')}*/}
            {/*    </a>*/}
            {/*  </LinkWrapper>*/}
            {/*  <LinkWrapper>*/}
            {/*    /!* eslint-disable-next-line*!/*/}
            {/*    <a rel="nofollow">*/}
            {/*      {t('footer.carServices.carWash')}*/}
            {/*    </a>*/}
            {/*  </LinkWrapper>*/}
            {/*  <LinkWrapper>*/}
            {/*    /!* eslint-disable-next-line*!/*/}
            {/*    <a rel="nofollow">*/}
            {/*      {t('footer.carServices.carsBuyOut')}*/}
            {/*    </a>*/}
            {/*  </LinkWrapper>*/}
            {/*  <LinkWrapper>*/}
            {/*    /!* eslint-disable-next-line*!/*/}
            {/*    <a rel="nofollow">*/}
            {/*      {t('footer.carServices.parts')}*/}
            {/*    </a>*/}
            {/*  </LinkWrapper>*/}
            {/*</div>*/}
          </Content>
          <HR />
          <CopyrightContent>
            <CopyrightLinkWrapper>
              <a href={generateUrlWithLang('/privacy-policy')}>
                {t('footer.copyright.privacyPolicy')}
              </a>
            </CopyrightLinkWrapper>
            <CopyrightLinkWrapper>
              <a href={generateUrlWithLang('/terms-and-conditions')}>
                {t('footer.copyright.userTerms')}
              </a>
            </CopyrightLinkWrapper>
            <CopyrightLinkWrapper>
              <a href={generateUrlWithLang('/aml-kyc-policy')}>
                {t('footer.copyright.amlKYCPolicy')}
              </a>
            </CopyrightLinkWrapper>
            <CopyrightText>
              ©{tMeta('default.shortAppName')} - {new Date().getFullYear()}
            </CopyrightText>
          </CopyrightContent>
        </Container>
      </footer>
    </ComponentThemeProvider>
  )
}

export default Footer
