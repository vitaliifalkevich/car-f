import React from 'react'
import Modal from 'ui/Modal'
import ModalTitle from 'ui/Modal/ModalTitle'
import { useTranslation, Trans } from 'react-i18next'
import { Content } from './styled'
import MainButton from 'ui/MainButton'
import { StatusImage } from '../styled'
import emailConfirmed from 'assets/icons/emailConfirmed.svg'
import { useNavigateHome } from 'hooks/useNavigate'

const EmailConfirmed: React.FC = () => {
  const { t } = useTranslation()

  const navigateHome = useNavigateHome()

  return (
    <Modal width="350px" height="362px" onClose={navigateHome}>
      <ModalTitle>
        <Trans>{t('emailConfirmedSuccess')}</Trans>
      </ModalTitle>
      <Content>
        <StatusImage src={emailConfirmed} alt="email is confirmed" />
        <MainButton onClick={navigateHome} color="blue">
          {t('ok')}
        </MainButton>
      </Content>
    </Modal>
  )
}

export default EmailConfirmed
