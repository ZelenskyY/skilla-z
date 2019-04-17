import { Entry, ADD_ENTRY, DELETE_ENTRY, INCREASE_LINK, ListActionType, RESET_RESENT } from './types'

export const addEntry = (entry: Entry): ListActionType => ({
  type: ADD_ENTRY,
  payload: entry
})

export const deleteEntry = (oldLink: string): ListActionType => ({
  type: DELETE_ENTRY,
  meta: { oldLink }
})

export const increaseLink = (oldLink: string): ListActionType => ({
  type: INCREASE_LINK,
  meta: { oldLink }
})

export const resetResent = (): ListActionType => ({
  type: RESET_RESENT
})