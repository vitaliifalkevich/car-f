import React, { useMemo } from 'react'
import ComponentThemeProvider from 'styles/theme/ComponentThemeProvider'
import themes from './themes'
import {
  Container,
  SellerContainer,
  Icon,
  SellerName,
  Text,
  Region,
  ConfirmedInfoContainer,
  Confirmed,
  ButtonWrapper,
} from './styled'
import sellerIcon from 'assets/icons/sellerIcon.svg'
import { useTranslation } from 'react-i18next'
import HiddenPhone from 'ui/HiddenPhone'
import { useOpenModalByHash, useRegion } from 'hooks'
import { getImageUrl } from 'utils'
import { useSelector } from 'react-redux'
import { getIsAuthorized, getUserProfile } from 'entities/Bootstrap/selectors'
import { getCarInfoData } from 'entities/CarInfo/selectors'
import SecondaryButton from 'ui/SecondaryButton'
import messageIcon from 'assets/icons/message.svg'
import { SIGN_IN_HASH } from 'features/PopUps/constants'
import { useBreakpoint } from '../../../MediaQueriesProvider'

interface SellerInfoCarPageProps {
  seller?: string | null
  region?: string
  phoneNumber?: string
  isPhoneConfirmed?: boolean
  isEmailConfirmed?: boolean
  carId?: number
  avatar?: string
  isMessageAvailable?: boolean
  openChat: () => void
  opponentId?: number
  sellerId?: number
}

const SellerInfoCarPage: React.FC<SellerInfoCarPageProps> = ({
  seller,
  region,
  phoneNumber,
  isPhoneConfirmed,
  isEmailConfirmed,
  carId,
  avatar,
  isMessageAvailable = false,
  openChat,
  opponentId,
  sellerId,
}) => {
  const { t } = useTranslation()
  const getRegion = useRegion()
  const profile = useSelector(getUserProfile)
  const isAuth = useSelector(getIsAuthorized)
  const carInfo = useSelector(getCarInfoData)
  const openSignIn = useOpenModalByHash(SIGN_IN_HASH)
  const breakpoints = useBreakpoint()

  const isMyAd = useMemo(() => profile?.id === sellerId, [profile, sellerId])

  if (breakpoints.mobile && !sellerId) return null

  return (
    <ComponentThemeProvider themes={themes}>
      <Container>
        <SellerContainer>
          <Icon src={avatar ? getImageUrl(avatar) : sellerIcon} alt="seller" />
          <div>
            <Text>{t('seller')}</Text>
            {seller && <SellerName>{seller}</SellerName>}
          </div>
        </SellerContainer>
        {region && <Region>{getRegion(region)}</Region>}
        <ConfirmedInfoContainer>
          {/*<Confirmed*/}
          {/*  isConfirmed={isPhoneConfirmed}*/}
          {/*  text={*/}
          {/*    isPhoneConfirmed ? t('phoneConfirmed') : t('phoneUnConfirmed')*/}
          {/*  }*/}
          {/*/>*/}
          <Confirmed
            isConfirmed={isEmailConfirmed}
            text={
              isEmailConfirmed ? t('emailConfirmed') : t('emailUnConfirmed')
            }
          />
        </ConfirmedInfoContainer>

        <div style={{ minHeight: '49px' }}>
          {phoneNumber && (
            <div style={{ marginTop: '12px' }}>
              <HiddenPhone phoneNumber={phoneNumber} carId={carId} />
            </div>
          )}
        </div>

        {!isMyAd && (
          <div style={{ marginTop: '12px' }}>
            {/*<HiddenPhone phoneNumber={phoneNumber} carId={carId} />*/}
            {!isAuth && carInfo?.user?.allow_private_messages && (
              <ButtonWrapper>
                <SecondaryButton
                  color="blue"
                  icon={messageIcon}
                  onClick={openSignIn}
                  iconPosition="left"
                >
                  {t('message')}
                </SecondaryButton>
              </ButtonWrapper>
            )}
          </div>
        )}
      </Container>
    </ComponentThemeProvider>
  )
}

export default SellerInfoCarPage
