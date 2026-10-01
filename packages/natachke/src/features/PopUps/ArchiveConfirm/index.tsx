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
import archive from 'assets/icons/archive.svg'

const ArchiveConfirm: React.FC<{
  onConfirmClickHandler: () => void
  closeArchiveConfirmation: () => void
}> = ({ closeArchiveConfirmation, onConfirmClickHandler }) => {
  const { t } = useTranslation()
  return (
    <Modal width="350px" height="362px" onClose={closeArchiveConfirmation}>
      <ModalTitle>
        <Trans>{t('archiveConfirm.title')}</Trans>
      </ModalTitle>
      <Content>
        <StatusImageArchiveConfirmation src={archive} alt="archive" />
        <Description>
          <Trans>{t('archiveConfirm.description')}</Trans>
        </Description>
        <ButtonsWrapper>
          <MainButton onClick={onConfirmClickHandler} color="blue">
            {t('archiveConfirm.action')}
          </MainButton>
          <MainButton onClick={closeArchiveConfirmation} color="grey">
            {t('cancel')}
          </MainButton>
        </ButtonsWrapper>
      </Content>
    </Modal>
  )
}

export default ArchiveConfirm
