import React, { useCallback, useRef } from 'react'
import { Container, Text, ButtonWrapper } from './styled'
import { InputTextarea } from 'ui/Inputs'
import { useTranslation } from 'react-i18next'
import { actions } from 'entities/Notes/slice'
import { useDispatch, useSelector } from 'react-redux'
import { getCarNoteByUrl } from 'entities/Notes/selectors'
import MainButton from 'ui/MainButton'
import { actions as favoriteActions } from 'entities/Favorites/slice'
import { getIsAuthorized } from 'entities/Bootstrap/selectors'
import { isCarFavorite } from 'entities/Favorites/selectors'

const MakeNote: React.FC<{
  showDisclaimer?: boolean
  carUrl: string
  onCloseNote: () => void
  carId: number
}> = ({ showDisclaimer = true, carUrl, onCloseNote, carId }) => {
  const { t } = useTranslation()
  const timer = useRef<null | number>(null)
  const dispatch = useDispatch()
  const carNote = useSelector(getCarNoteByUrl(carUrl))
  const isAuth = useSelector(getIsAuthorized)
  const isFavorite = useSelector(isCarFavorite(carId))

  const changeNoteInState = useCallback(
    note => {
      dispatch(actions.addOrChangeNote({ carUrl, text: note }))
    },
    [carUrl, dispatch],
  )

  const onChangeHandler = useCallback(
    e => {
      const { value } = e.target
      if (timer.current) clearTimeout(timer.current)
      //@ts-ignore
      timer.current = setTimeout(() => {
        changeNoteInState(value)
      }, 200)
    },
    [changeNoteInState, timer],
  )

  const onSaveNoteHandler = useCallback(() => {
    if (isAuth && !isFavorite)
      dispatch(favoriteActions.startAddingFavoriteCar(carId))
    onCloseNote()
  }, [carId, dispatch, isAuth, isFavorite, onCloseNote])

  return (
    <Container>
      <InputTextarea
        onChange={onChangeHandler}
        inputName="note"
        defaultValue={carNote?.message}
        labelText={t('note')}
        placeholder={t('makeNotePlaceHolder')}
      />
      <ButtonWrapper>
        <MainButton type="submit" color="blue" onClick={onSaveNoteHandler}>
          {t('save')}
        </MainButton>
      </ButtonWrapper>
      {showDisclaimer && (
        <Text style={{ marginTop: '7px' }}>{t('makeNoteDisclaimer')}</Text>
      )}
    </Container>
  )
}

export default MakeNote
