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
  PhoneWrapper,
} from './styled'
import sellerIcon from 'assets/icons/sellerIcon.svg'
import { useTranslation } from 'react-i18next'
import HiddenPhone from 'ui/HiddenPhone'
import { useBreakpoint } from 'MediaQueriesProvider'
import { getImageUrl } from 'utils'
import { useDispatch, useSelector } from 'react-redux'
import {
  getIsAuthorized,
  getUserProfile,
} from '../../../entities/Bootstrap/selectors'

interface SellerInfoWithMessageProps {
  sellerId?: number
  seller: string
  region: string
  phoneNumber: string
  avatar?: string
}

const SellerInfoWithMessage: React.FC<SellerInfoWithMessageProps> = ({
  sellerId,
  seller,
  region,
  phoneNumber,
  avatar,
}) => {
  const { t } = useTranslation()
  const dispatch = useDispatch()
  const breakpoints = useBreakpoint()
  const profile = useSelector(getUserProfile)
  const isAuth = useSelector(getIsAuthorized)

  const isMyAd = useMemo(() => profile?.id === sellerId, [profile, sellerId])

  return (
    <ComponentThemeProvider themes={themes}>
      <Container>
        <SellerContainer>
          <Icon src={avatar ? getImageUrl(avatar) : sellerIcon} alt="seller" />
          <div>
            <div>
              <Text>{t('seller')}</Text>
              <SellerName>{seller}</SellerName>
            </div>
            {breakpoints.tablet ||
              (breakpoints.mobile && <Region>{region}</Region>)}
          </div>

        </SellerContainer>
        {!breakpoints.tablet && !breakpoints.mobile && (
          <Region>{region}</Region>
        )}

        <PhoneWrapper>
          <HiddenPhone phoneNumber={phoneNumber} />
        </PhoneWrapper>
      </Container>
    </ComponentThemeProvider>
  )
}

export default SellerInfoWithMessage
