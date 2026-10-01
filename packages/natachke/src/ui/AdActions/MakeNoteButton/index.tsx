import React from 'react'
import { Container, Icon, Text } from './styled'
import makeNote from 'assets/icons/makeNote.svg'
import { useTranslation } from 'react-i18next'

interface MakeNoteButtonProps {
  toggleNote: () => void
  carNote?: string
}
const MakeNoteButton: React.FC<MakeNoteButtonProps> = ({
  toggleNote,

  carNote,
}) => {
  const { t } = useTranslation()
  return (
    <Container onClick={toggleNote}>
      <Icon
        src={makeNote}
        alt="make a note"
        style={{ height: '18px', width: '18px' }}
      />
      <Text directionIcon="left">
        {carNote ? t('editNote') : t('makeNote')}
      </Text>
    </Container>
  )
}

export default MakeNoteButton
