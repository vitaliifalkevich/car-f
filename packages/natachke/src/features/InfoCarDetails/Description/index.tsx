import React, { useCallback, useState } from 'react'
import parse from 'react-html-parser'
import * as colors from 'assets/icons/filters/colors/assets'
import {
  Container,
  TwoColumnsContainer,
  Property,
  Value,
  Color,
  LastTwoColumnsWrapper,
  Row,
  Point,
  ReadAll,
  ActionContainer,
  ActionIcon,
  ActionText,
  NoteIconMobile,
  MakeNoteMobileContainer,
  ComplainMobileContainer,
  NoteContainer,
} from './styled'
import { ICarEntity } from 'entities/CarInfo/types'
import { useTranslation } from 'react-i18next'
import HorizontalLine from 'ui/HorizontalLine'
import { MakeNote, MakeComplain } from 'ui/Forms'
import MainButton from 'ui/MainButton'
import makeNote from 'assets/icons/makeNote.svg'
import complain from 'assets/icons/complain.svg'
import { useBreakpoint } from 'MediaQueriesProvider'
import MakeNoteButton from 'ui/AdActions/MakeNoteButton'
import Note from 'ui/Note'
import { getShortDescription } from 'utils'
import { useLocaleCarOptions } from 'hooks'
import { useDispatch, useSelector } from 'react-redux'
import { getCarNoteByUrl } from 'entities/Notes/selectors'
import { actions } from 'entities/Notes/slice'

const Description: React.FC<ICarEntity> = ({
  body_type,
  transmission,
  drive,
  mileage,
  engine_volume,
  engine_type,
  color,
  accidents,
  state,
  options,
  description,
  canEdit,
  url,
  id,
}) => {
  const breakpoints = useBreakpoint()
  const { t } = useTranslation()
  const [showShortDescription, setShowShortDescription] = useState(true)
  const [showMakeNote, setMakeNote] = useState(false)
  const [showComplain, setShowComplain] = useState(false)
  const carNote = useSelector(getCarNoteByUrl(url))
  const dispatch = useDispatch()

  const securityOptions = useLocaleCarOptions(
    options || [],
    'security',
    'securityOptions',
  )

  const comfortOptions = useLocaleCarOptions(
    options || [],
    'comfort',
    'comfortOptions',
  )
  const multimediaOptions = useLocaleCarOptions(
    options || [],
    'multimedia',
    'multimediaOptions',
  )

  const deleteNoteAction = useCallback(() => {
    if (url) dispatch(actions.deleteNote({ carUrl: url }))
  }, [dispatch, url])

  const toggleNote = useCallback(() => {
    setMakeNote(!showMakeNote)
  }, [showMakeNote])

  const closeNote = useCallback(() => {
    setMakeNote(false)
  }, [])

  const toggleComplain = useCallback(() => {
    setShowComplain(!showComplain)
  }, [showComplain])

  const closeComplain = useCallback(() => {
    setShowComplain(false)
  }, [setShowComplain])

  const toggleDescription = useCallback(() => {
    setShowShortDescription(!showShortDescription)
  }, [showShortDescription])

  const generateDescriptionWithPoints = useCallback((description: string[]) => {
    return description.map((item, idx) => (
      <React.Fragment key={item}>
        <div>{item}</div>
        {idx + 1 !== description.length && <Point />}
      </React.Fragment>
    ))
  }, [])
  return (
    <Container>
      <TwoColumnsContainer>
        <div>
          <Property>{t('body')}</Property>
          <Value>{t(`bodyTypeOptions.${body_type?.value}`)}</Value>
        </div>
        <div>
          <Property>{t('transmission')}</Property>
          <Value>{t(`transmissionOptions.${transmission?.value}`)}</Value>
        </div>
      </TwoColumnsContainer>
      <TwoColumnsContainer>
        <div>
          <Property>{t('mileage')}</Property>
          <Value>{mileage + ' ' + t('mileageUnits')}</Value>
        </div>
        <div>
          <Property>{t('drive')}</Property>
          <Value>{t(`driveOptions.${drive?.value}`)}</Value>
        </div>
      </TwoColumnsContainer>
      <TwoColumnsContainer>
        {engine_volume ? (
          <div>
            <Property>{t('engine')}</Property>
            <Value>
              {engine_volume +
                ' ' +
                t('liter') +
                ', ' +
                t(`fuelOptions.${engine_type?.value}`).toLowerCase()}
            </Value>
          </div>
        ) : (
          <div>
            <Property>{t('engine')}</Property>
            <Value>
              {t(`fuelOptions.${engine_type?.value}`).toLowerCase()}
            </Value>
          </div>
        )}

        <div>
          <Property>{t('color')}</Property>
          <Value>
            {color?.value && (
              <Color src={colors[color.value]} alt={color.value} />
            )}

            {t(`colorOptions.${color?.value}`)}
          </Value>
        </div>
      </TwoColumnsContainer>
      <LastTwoColumnsWrapper>
        <TwoColumnsContainer>
          <div>
            <Property>{t('accidents')}</Property>
            <Value>{t(`${accidents ? 'yes' : 'no'}`)}</Value>
          </div>
          <div>
            <Property>{t('carState')}</Property>
            <Value>{t(`carStateOptions.${state?.value}`)}</Value>
          </div>
        </TwoColumnsContainer>
      </LastTwoColumnsWrapper>
      {securityOptions && securityOptions.length > 0 && (
        <Row>
          <Property>{t('security')}</Property>
          <Value>{generateDescriptionWithPoints(securityOptions)}</Value>
        </Row>
      )}
      {comfortOptions && comfortOptions.length > 0 && (
        <Row>
          <Property>{t('comfort')}</Property>
          <Value>{generateDescriptionWithPoints(comfortOptions)}</Value>
        </Row>
      )}
      {multimediaOptions && multimediaOptions.length > 0 && (
        <Row>
          <Property>{t('multimedia')}</Property>
          <Value>{generateDescriptionWithPoints(multimediaOptions)}</Value>
        </Row>
      )}
      {description && (
        <Row>
          <Property>{t('description')}</Property>
          <Value>
            {showShortDescription
              ? parse(getShortDescription(description))
              : parse(description)}
          </Value>
        </Row>
      )}
      <ReadAll isOpen={!showShortDescription} onClick={toggleDescription} />
      <HorizontalLine />
      {breakpoints.mobile && (
        <MakeNoteMobileContainer>
          <MainButton onClick={toggleNote} color="grey">
            <NoteIconMobile src={makeNote} alt="make a note" />
            {showMakeNote ? t('hideNote') : t('makeNote')}
          </MainButton>
        </MakeNoteMobileContainer>
      )}
      <TwoColumnsContainer>
        {!breakpoints.mobile && (
          <>
            {!showMakeNote ? (
              <MakeNoteButton
                toggleNote={toggleNote}
                carNote={carNote?.message}
              />
            ) : (
              <div />
            )}

            {!canEdit ? (
              <ActionContainer onClick={toggleComplain}>
                <ActionText directionIcon="right">
                  {showComplain ? t('cancelComplain') : t('complain')}
                </ActionText>
                <ActionIcon src={complain} alt="complain" />
              </ActionContainer>
            ) : null}
          </>
        )}
      </TwoColumnsContainer>
      {showMakeNote && url && id && (
        <MakeNote carUrl={url} onCloseNote={closeNote} carId={id} />
      )}
      {carNote?.message && !showMakeNote ? (
        <NoteContainer>
          <Note
            text={carNote?.message}
            type="warning"
            actionClick={deleteNoteAction}
            actionType="deleteNote"
          />
        </NoteContainer>
      ) : null}

      {!canEdit && breakpoints.mobile && (
        <ComplainMobileContainer>
          <ActionContainer onClick={toggleComplain}>
            <ActionText directionIcon="right">
              {showComplain ? t('cancelComplain') : t('complainMobile')}
            </ActionText>
            <ActionIcon src={complain} alt="complain" />
          </ActionContainer>
        </ComplainMobileContainer>
      )}
      {showComplain && <MakeComplain closeComplain={closeComplain} />}
    </Container>
  )
}

export default Description
