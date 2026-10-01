import React from 'react'
import ModalTitle from 'ui/Modal/ModalTitle'
import { useTranslation, Trans } from 'react-i18next'
import {
  Container,
  Content,
  Description,
  StatusImageResetPassword,
} from '../styled'
import MainButton from 'ui/MainButton'
import infoSuccess from 'assets/icons/infoSuccess.svg'
import { useNavigateHomeSignIn } from 'hooks/useNavigate'

const ResetPasswordStep2: React.FC = () => {
  const { t } = useTranslation()
  const openSignIn = useNavigateHomeSignIn()

  return (
    <Container>
      <ModalTitle>
        <Trans>{t('passwordSetUpSuccess.title')}</Trans>
      </ModalTitle>
      <Content>
        <StatusImageResetPassword src={infoSuccess} alt="info" />
        <Description>
          <Trans>{t('passwordSetUpSuccess.description')}</Trans>
        </Description>
        <MainButton onClick={openSignIn} color="blue">
          {t('ok')}
        </MainButton>
      </Content>
    </Container>
  )
}

export default ResetPasswordStep2
