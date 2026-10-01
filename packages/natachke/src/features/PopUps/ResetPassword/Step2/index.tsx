import React from 'react'
import ModalTitle from 'ui/Modal/ModalTitle'
import { useTranslation, Trans } from 'react-i18next'
import {
  Container,
  Content,
  Description,
  StatusImageResetPassword,
} from './styled'
import MainButton from 'ui/MainButton'
import envelop from 'assets/icons/envelop.svg'
import { useCloseCurrentModal } from 'hooks/useNavigate'

const ResetPasswordStep2: React.FC = () => {
  const { t } = useTranslation()
  const closeModal = useCloseCurrentModal()

  return (
    <Container>
      <ModalTitle>
        <Trans>{t('checkYourEmail.title')}</Trans>
      </ModalTitle>
      <Content>
        <StatusImageResetPassword src={envelop} alt="check your email" />
        <Description>
          <Trans>{t('checkYourEmail.description')}</Trans>
        </Description>
        <MainButton onClick={closeModal} color="blue">
          {t('ok')}
        </MainButton>
      </Content>
    </Container>
  )
}

export default ResetPasswordStep2
