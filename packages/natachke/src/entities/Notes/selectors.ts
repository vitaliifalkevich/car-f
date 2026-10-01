import { createSelector } from 'reselect'
import { RootState } from 'store/types'
import { initialState } from './slice'

export const selectNotesData = (state: RootState) => state.notes || initialState

export const getCarNoteByUrl = carUrl =>
  createSelector([selectNotesData], data => data.data[carUrl]) || ''
