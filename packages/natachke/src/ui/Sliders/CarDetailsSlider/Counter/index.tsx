import React from 'react'
import { Container, Icon, Text } from './styled'
import countImageIcon from 'assets/icons/countImagesIcon.svg'

const Counter: React.FC<{ count: number; active: number }> = ({
  active,
  count,
}) => {
  return (
    <Container>
      <Icon src={countImageIcon} alt="image" />
      <Text>{`${active} / ${count}`}</Text>
    </Container>
  )
}

export default Counter
