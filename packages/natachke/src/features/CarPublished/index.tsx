import React, { useMemo } from 'react'
import { MainContainer } from 'ui/Containers'
import { PageTitle } from 'ui/Text'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import search from 'assets/icons/search.svg'
import {
  TopContentContainer,
  Image,
  Description,
  ShareText,
  ShareLink,
  BackSearchButtonWrapper,
} from './styled'
import ComponentThemeProvider from 'styles/theme/ComponentThemeProvider'
import themes from './themes'
import ShareSocial from '../ShareSocial'
import HorizontalLine from 'ui/HorizontalLine'
import MainButton from 'ui/MainButton'
import { useGenerateCarFullURL, useGenerateUrlWithLang } from '../../hooks'
// import OfferAfterPublish from './OfferAfterPublish'
import { useSelector } from 'react-redux'
import { getCreateCarUrl } from '../../entities/Car/selectors'

const CarPublished: React.FC = () => {
  const { t } = useTranslation()
  const generateCarFullURL = useGenerateCarFullURL()
  const carUrl = useSelector(getCreateCarUrl)
  const generateUrlWithLang = useGenerateUrlWithLang()
  const shareText = useMemo(() => {
    return (
      <div>
        <ShareText>{t('shareLink')}</ShareText>
        <ShareLink href={generateCarFullURL(carUrl)}>
          {generateCarFullURL(carUrl)}
        </ShareLink>
      </div>
    )
  }, [carUrl, generateCarFullURL, t])
  return (
    <ComponentThemeProvider themes={themes}>
      <MainContainer>
        <PageTitle withBorder={true}>{t(`createCar.successCreated`)}</PageTitle>
        <TopContentContainer>
          <Image />
          <div>
            <Description>
              {t('createCar.successCreatedDescription')}
            </Description>
            <ShareSocial
              shareUrl={generateCarFullURL(carUrl)}
              title={shareText}
            />
            <BackSearchButtonWrapper>
              <Link to={generateUrlWithLang(`/search`)}>
                <MainButton color="blue" icon={search} iconPosition="left">
                  {t('backToSearch')}
                </MainButton>
              </Link>
            </BackSearchButtonWrapper>
          </div>
        </TopContentContainer>
        <HorizontalLine />
        {/*<OfferAfterPublish />*/}
      </MainContainer>
    </ComponentThemeProvider>
  )
}

export default CarPublished
