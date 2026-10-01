import React from 'react'
import { Link } from 'react-router-dom'
import ComponentThemeProvider from 'styles/theme/ComponentThemeProvider'
import themes from './themes'
import { ChangePasswordContainer, ChangePasswordIcon, Text } from './styled'
import lock from 'assets/icons/lock.svg'
import { useTranslation } from 'react-i18next'
import { useChangePasswordUrl } from '../../hooks'

const ChangePasswordTextWithIcon: React.FC = () => {
  const { t } = useTranslation()
  const changePasswordUrl = useChangePasswordUrl()
  return (
    <ComponentThemeProvider themes={themes}>
      <ChangePasswordContainer>
        <ChangePasswordIcon src={lock} alt="change password" />
        <Link to={changePasswordUrl}>
          <Text>{t('settings.changePassword')}</Text>
        </Link>
      </ChangePasswordContainer>
    </ComponentThemeProvider>
  )
}

export default ChangePasswordTextWithIcon
