import React from 'react'
import { Icon, Item, Text } from '../styled'
import toTheTop from 'assets/icons/toTheTop.svg'
import { useTranslation } from 'react-i18next'
import { env } from 'config'

const PushTop: React.FC<{
  pushTopClick: () => void
  isNotActive?: boolean
}> = ({ pushTopClick, isNotActive = false }) => {
  const { t } = useTranslation()

  if (!env.topSearchServiceEnabled && !env.toTopServiceEnabled) return <div />

  return (
    <Item isNotActive={isNotActive}>
      <Icon src={toTheTop} alt="top" />
      <Text
        isAction={true}
        onClick={() => pushTopClick()}
        isNotActive={isNotActive}
      >
        {t('hoistingAd')}
      </Text>
    </Item>
  )
}

export default PushTop
