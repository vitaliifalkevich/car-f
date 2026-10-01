import React from 'react'
import { Icon, Item, Text } from '../styled'
import { useTranslation } from 'react-i18next'
import publish from 'assets/icons/publish.svg'

const Publish: React.FC<{ publishHandler: () => void }> = ({
  publishHandler,
}) => {
  const { t } = useTranslation()
  return (
    <Item>
      <Icon src={publish} alt="publish" />
      <Text isAction={true} onClick={publishHandler}>
        {t('publish')}
      </Text>
    </Item>
  )
}

export default Publish
