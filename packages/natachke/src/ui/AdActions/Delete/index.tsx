import React from 'react'
import { Icon, Item, Text } from '../styled'
import { useTranslation } from 'react-i18next'
import trash from 'assets/icons/trash.svg'

const Delete: React.FC<{ setOpenDeleteConfirmation: (boolean) => void }> = ({
  setOpenDeleteConfirmation,
}) => {
  const { t } = useTranslation()
  return (
    <Item>
      <Icon src={trash} alt="delete" />
      <Text
        isAction={true}
        onClick={() => {
          setOpenDeleteConfirmation(true)
        }}
      >
        {t('toDelete')}
      </Text>
    </Item>
  )
}

export default Delete
