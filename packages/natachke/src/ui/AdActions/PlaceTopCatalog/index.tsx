import React from 'react'
import { HighLightText, Icon, Item, Text } from '../styled'
import placeTop from 'assets/icons/placeTop.svg'
import { useTranslation } from 'react-i18next'
import { env } from 'config'

const PlaceTopCatalog: React.FC<{
  onClickNavigatePlaceInTopCatalog: () => void
  isNotActive?: boolean
}> = ({ onClickNavigatePlaceInTopCatalog, isNotActive = false }) => {
  const { t } = useTranslation()
  if (!env.topCatalogServiceEnabled) return <div />

  return (
    <Item isNotActive={isNotActive}>
      <Icon src={placeTop} alt="place top" />
      <Text
        isAction={true}
        onClick={() => onClickNavigatePlaceInTopCatalog()}
        isNotActive={isNotActive}
      >
        {t('placeTo') + ' '}
        <HighLightText>{t('top')}</HighLightText>
      </Text>
    </Item>
  )
}

export default PlaceTopCatalog
