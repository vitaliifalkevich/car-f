import React from 'react'
import Modal from 'ui/Modal'
import ModalTitle from 'ui/Modal/ModalTitle'
import { useTranslation, Trans } from 'react-i18next'
import { Content } from './styled'
import MainButton from 'ui/MainButton'
import { StatusImage } from '../styled'
import warningInfo from 'assets/icons/warningInfo.svg'
import { useCloseCurrentModal } from 'hooks/useNavigate'

const CloseAccountConfirmation: React.FC = () => {
  const { t } = useTranslation()
  const closeModal = useCloseCurrentModal()

  return (
    <Modal width="350px" height="362px">
      <ModalTitle>
        <Trans>{t('closeAccountConfirmation')}</Trans>
      </ModalTitle>
      <Content>
        <StatusImage src={warningInfo} alt="account is closed" />
        <MainButton onClick={closeModal} color="blue">
          {t('ok')}
        </MainButton>
      </Content>
    </Modal>
  )
}

export default CloseAccountConfirmation
