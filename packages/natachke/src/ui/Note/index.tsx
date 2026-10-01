import React, { useCallback, useState } from 'react'
import ComponentThemeProvider from 'styles/theme/ComponentThemeProvider'
import themes from './themes'
import {
  Container,
  Icon,
  ActionsContainer,
  TextAction,
  ActionIcon,
  Action,
  Description,
} from './styled'
import arrowButton from 'assets/icons/note/arrowBottom.svg'
import * as icons from 'assets/icons/note/assets'
import { useTranslation } from 'react-i18next'

interface NoteProps {
  type: 'warning' | 'error'
  text: string
  actionType?: 'resend' | 'deleteNote'
  actionClick?: () => void
}

const Note: React.FC<NoteProps> = ({ type, text, actionType, actionClick }) => {
  const [showFullText, setShowFullText] = useState(false)
  const { t } = useTranslation()

  const toggleText = useCallback(() => {
    setShowFullText(!showFullText)
  }, [showFullText])

  return (
    <ComponentThemeProvider themes={themes}>
      <Container type={type}>
        <Icon src={icons?.[type]} alt="note" />
        <Description isShort={!showFullText}>{text}</Description>
        <div />
        <ActionsContainer>
          <Action>
            <ActionIcon
              src={arrowButton}
              alt="arrow"
              isCollapsed={!showFullText}
            />
            <TextAction onClick={toggleText}>
              {showFullText ? t('collapse') : t('readMore')}
            </TextAction>
          </Action>
          {actionType ? (
            <Action onClick={actionClick}>
              <ActionIcon
                src={actionType === 'resend' ? icons.update : icons.deleteNote}
                alt="action"
              />
              <TextAction>
                {actionType === 'resend' ? t('resendCar') : t('deleteNote')}
              </TextAction>
            </Action>
          ) : null}
        </ActionsContainer>
      </Container>
    </ComponentThemeProvider>
  )
}

export default Note
