import React from 'react'
import { Container, Icon, Text } from './styled'
import scaleIcon from 'assets/icons/scaleIcon.svg'
import { useTranslation } from 'react-i18next'

const Scale: React.FC<{ onClick: () => void }> = ({ onClick }) => {
  const { t } = useTranslation()
  return (
    <Container onClick={onClick}>
      <Icon src={scaleIcon} alt="scale" />
      <Text>{t('scaleImage')}</Text>
    </Container>
  )
}

export default Scale
