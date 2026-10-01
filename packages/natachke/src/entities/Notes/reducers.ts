import { PayloadAction } from '@reduxjs/toolkit'
import { IAddNote, IState, IDeleteNote } from './types'

export const addOrChangeNote = (
  state: IState,
  action: PayloadAction<IAddNote>,
) => {
  state.data[action.payload.carUrl] = {
    message: action.payload.text,
    date: new Date().getTime(),
  }
}

export const deleteNote = (
  state: IState,
  action: PayloadAction<IDeleteNote>,
) => {
  const newState = Object.assign({}, state.data)
  delete newState[action.payload.carUrl]
  state.data = newState
}
