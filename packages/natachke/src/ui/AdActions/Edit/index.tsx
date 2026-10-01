import React from 'react'
import { Icon, Item, Text } from '../styled'
import edit from 'assets/icons/edit.svg'
import { useTranslation } from 'react-i18next'

const Edit: React.FC<{ onClickEditCar: () => void }> = ({ onClickEditCar }) => {
  const { t } = useTranslation()
  return (
    <Item>
      <Icon src={edit} alt="edit" />
      <Text isAction={true} onClick={() => onClickEditCar()}>
        {t('edit')}
      </Text>
    </Item>
  )
}

export default Edit
