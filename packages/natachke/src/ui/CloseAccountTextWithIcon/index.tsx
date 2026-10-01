import React from 'react'
import { Link } from 'react-router-dom'
import ComponentThemeProvider from 'styles/theme/ComponentThemeProvider'
import themes from './themes'
import { ChangePasswordContainer, ChangePasswordIcon, Text } from './styled'
import trashRed from 'assets/icons/trashRed.svg'
import { useTranslation } from 'react-i18next'
import { useCloseAccountUrl } from 'hooks'

const CloseAccountTextWithIcon: React.FC = () => {
  const { t } = useTranslation()
  const changePasswordUrl = useCloseAccountUrl()
  return (
    <ComponentThemeProvider themes={themes}>
      <ChangePasswordContainer>
        <ChangePasswordIcon src={trashRed} />
        <Link to={changePasswordUrl}>
          <Text>{t('settings.closeAccount')}</Text>
        </Link>
      </ChangePasswordContainer>
    </ComponentThemeProvider>
  )
}

export default CloseAccountTextWithIcon
