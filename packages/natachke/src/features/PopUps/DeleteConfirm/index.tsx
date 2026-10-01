import React from 'react'
import ModalTitle from 'ui/Modal/ModalTitle'
import { Trans, useTranslation } from 'react-i18next'
import {
  Content,
  Description,
  ButtonsWrapper,
  StatusImageArchiveConfirmation,
} from './styled'
import MainButton from 'ui/MainButton'
import Modal from 'ui/Modal'
import trash from 'assets/icons/trash.svg'

const DeleteConfirm: React.FC<{
  onConfirmClickHandler: () => void
  closeDeleteConfirmation: () => void
}> = ({ closeDeleteConfirmation, onConfirmClickHandler }) => {
  const { t } = useTranslation()
  return (
    <Modal width="350px" height="362px" onClose={closeDeleteConfirmation}>
      <ModalTitle>
        <Trans>{t('deleteConfirm.title')}</Trans>
      </ModalTitle>
      <Content>
        <StatusImageArchiveConfirmation src={trash} alt="delete" />
        <Description>
          <Trans>{t('deleteConfirm.description')}</Trans>
        </Description>
        <ButtonsWrapper>
          <MainButton onClick={onConfirmClickHandler} color="blue">
            {t('deleteConfirm.action')}
          </MainButton>
          <MainButton onClick={closeDeleteConfirmation} color="grey">
            {t('cancel')}
          </MainButton>
        </ButtonsWrapper>
      </Content>
    </Modal>
  )
}

export default DeleteConfirm
