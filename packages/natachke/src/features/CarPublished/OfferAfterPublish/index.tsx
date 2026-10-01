import React, { useCallback, useMemo } from 'react'
import {
  Container,
  Title,
  Description,
  PeriodPlacement,
  Price,
  ButtonWrapper,
  AcceptTermsAndConditions,
  BadgeWrapper,
} from './styled'
import ComponentThemeProvider from 'styles/theme/ComponentThemeProvider'
import themes from './themes'
import { Trans, useTranslation } from 'react-i18next'
import { Form, Field } from 'react-final-form'
import { ButtonsGroup } from 'ui/Inputs'
import { useGenerateUrlWithLang, useTopCatalogPlacementPeriod } from 'hooks'
import MainButton from 'ui/MainButton'
import { Link } from 'react-router-dom'
import { TextLink } from 'ui/Text'
import { Top50 } from 'ui/Badges'

const OfferAfterPublish: React.FC = () => {
  const { t } = useTranslation()
  const topCatalogPlacementPeriod = useTopCatalogPlacementPeriod()
  const initialValues = useMemo(
    () => ({ placementPeriod: topCatalogPlacementPeriod[0]?.value }),
    [topCatalogPlacementPeriod],
  )
  const onSubmitHandler = useCallback(values => {}, [])
  const generateUrlWithLang = useGenerateUrlWithLang()

  return (
    <ComponentThemeProvider themes={themes}>
      <Container>
        <div style={{ position: 'relative' }}>
          <BadgeWrapper>
            <Top50 size="md" />
          </BadgeWrapper>
          <Title>{t('offerAfterPublish.titleLine1')}</Title>
          <Title>{t('offerAfterPublish.titleLine2')}</Title>
          <Description>{t('offerAfterPublish.description')}</Description>
        </div>
        <PeriodPlacement>{t('chosePeriodOfPlacement')}</PeriodPlacement>
        <Form
          onSubmit={onSubmitHandler}
          initialValues={initialValues}
          render={({ handleSubmit }) => (
            <form onSubmit={handleSubmit}>
              <Field
                name="placementPeriod"
                render={({ input }) => (
                  <>
                    <ButtonsGroup
                      options={topCatalogPlacementPeriod}
                      {...input}
                    />
                  </>
                )}
              />
              <Price>99 грн</Price>
              <ButtonWrapper>
                <Link
                  to={generateUrlWithLang(`/place-top/audi-q5-2015-gvq234-4`)}
                >
                  <MainButton color="blue">
                    {t('offerAfterPublish.place')}
                  </MainButton>
                </Link>
              </ButtonWrapper>
              <AcceptTermsAndConditions>
                {t('offerAfterPublish.placingInTheTopCatalogYouConfirm')}
                <br />
                <TextLink to={generateUrlWithLang('/terms-and-conditions')}>
                  <Trans>{t('offerAfterPublish.termsAndConditions')}</Trans>
                </TextLink>
              </AcceptTermsAndConditions>
            </form>
          )}
        />
      </Container>
    </ComponentThemeProvider>
  )
}

export default OfferAfterPublish
