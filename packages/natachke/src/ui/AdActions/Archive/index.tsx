import React from 'react'
import { Icon, Item, Text } from '../styled'
import { useTranslation } from 'react-i18next'
import archive from 'assets/icons/archive.svg'

const Archive: React.FC<{ setOpenArchiveConfirmation: (boolean) => void }> = ({
  setOpenArchiveConfirmation,
}) => {
  const { t } = useTranslation()
  return (
    <Item>
      <Icon src={archive} alt="archive" />
      <Text
        isAction={true}
        onClick={() => {
          setOpenArchiveConfirmation(true)
        }}
      >
        {t('archive')}
      </Text>
    </Item>
  )
}

export default Archive
