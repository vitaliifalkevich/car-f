import React from 'react'
import ModalTitle from 'ui/Modal/ModalTitle'
import { Trans, useTranslation } from 'react-i18next'
import { Content } from './styled'
import Modal from 'ui/Modal'

import { useSelector } from 'react-redux'
import {
  getIsViewsHistoryLoading,
  getViewsHistoryErrors,
} from 'entities/ViewsCount/selectors'
import { BlockLoader } from 'ui/Loaders'
import CanvasWithData from './CanvasWithData'
import ErrorText from 'ui/ErrorText'

const Statistic: React.FC<{ closeStatistic: () => void }> = ({
  closeStatistic,
}) => {
  const { t } = useTranslation()

  const isViewsHistoryLoading = useSelector(getIsViewsHistoryLoading)
  const errorsViewsHistory = useSelector(getViewsHistoryErrors)

  return (
    <Modal width="800px" height="auto" onClose={closeStatistic}>
      <ModalTitle>
        <Trans>{t('statistic')}</Trans>
      </ModalTitle>
      <Content>
        {errorsViewsHistory ? (
          <ErrorText>{t('statistic_history_error')}</ErrorText>
        ) : isViewsHistoryLoading ? (
          <BlockLoader />
        ) : (
          <CanvasWithData />
        )}
      </Content>
    </Modal>
  )
}

export default Statistic
