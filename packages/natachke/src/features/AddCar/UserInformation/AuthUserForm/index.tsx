import React from 'react'
import { useSelector } from 'react-redux'
import { getUserProfile } from 'entities/Bootstrap/selectors'
import { FormItemContainer } from '../../styled'
import { Text } from 'ui/Text'
import { OptionTitle } from 'ui/Inputs'
import { useTranslation } from 'react-i18next'

const AuthUserForm: React.FC = () => {
  const userData = useSelector(getUserProfile)
  const { t } = useTranslation()

  return (
    <div>
      <FormItemContainer>
        <div>
          <OptionTitle>{t('email')}</OptionTitle>
          <Text style={{ margin: '0' }}>{userData?.email}</Text>
        </div>
      </FormItemContainer>
      <FormItemContainer>
        <div>
          <OptionTitle>{t('seller')}</OptionTitle>
          <Text style={{ margin: '0' }}>{userData?.first_name}</Text>
        </div>
      </FormItemContainer>
      {userData?.phone_code && userData?.phone_number && (
        <FormItemContainer>
          <div>
            <OptionTitle>{t('phone')}</OptionTitle>
            <Text
              style={{ margin: '0' }}
            >{`${userData?.phone_code}${userData?.phone_number}`}</Text>
          </div>
        </FormItemContainer>
      )}
    </div>
  )
}

export default AuthUserForm
