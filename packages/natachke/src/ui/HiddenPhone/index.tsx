import React, { useCallback, useState, useMemo } from 'react'
import parsePhoneNumber from 'libphonenumber-js'
import ComponentThemeProvider from 'styles/theme/ComponentThemeProvider'
import themes from './themes'
import { Container, Phone, ShowPhone, ShowPhoneContainer } from './styled'
import { useTranslation } from 'react-i18next'
import { useGetIncreasePhoneViews } from '../../hooks'
import { useParams } from 'react-router-dom'
import { gtagEvent, GtagEvents } from '../../analytics'

interface HiddenPhoneProps {
  phoneNumber?: string
  carId?: number
}

const HiddenPhone: React.FC<HiddenPhoneProps> = ({ phoneNumber, carId }) => {
  const { t } = useTranslation()
  const { carUrl } = useParams()
  const getIncreasePhoneViews = useGetIncreasePhoneViews({
    carId,
    carUrl,
  })
  const parsedPhone = useMemo(
    () => (phoneNumber ? parsePhoneNumber(phoneNumber) : null),
    [phoneNumber],
  )

  const [phone, showPhone] = useState<string | undefined>(
    parsedPhone
      ? `+${
          parsedPhone?.countryCallingCode
        } ${parsedPhone?.nationalNumber.slice(0, 2)} *** ** **`
      : undefined,
  )

  const showFullPhoneNumber = useCallback(() => {
    const parsedPhone = phoneNumber ? parsePhoneNumber(phoneNumber) : null
    showPhone(parsedPhone?.formatInternational())
    getIncreasePhoneViews()
    //send analytics event
    gtagEvent(GtagEvents.PRESS_VIEW_PHONE)
  }, [getIncreasePhoneViews, phoneNumber])

  if (!phoneNumber || !phone) return null

  return (
    <ComponentThemeProvider themes={themes}>
      <Container>
        <Phone>{phone}</Phone>
        <ShowPhoneContainer>
          <ShowPhone onClick={showFullPhoneNumber}>{t('showPhone')}</ShowPhone>
        </ShowPhoneContainer>
      </Container>
    </ComponentThemeProvider>
  )
}

export default HiddenPhone
