export interface Entry {
  oldLink: string;
  newLink: string;
  follow: number;
  recent: boolean;
}

export interface EntryState {
  entries: Entry[]
}

export const ADD_ENTRY = 'ADD_ENTRY'
export const DELETE_ENTRY = 'DELETE_ENTRY'
export const INCREASE_LINK = 'INCREASE_LINK'
export const RESET_RESENT = 'RESET_RESENT'

interface AddEntry {
  type: typeof ADD_ENTRY;
  payload: Entry;
}

interface DeleteEntry {
  type: typeof DELETE_ENTRY;
  meta: {
    oldLink: string;
  }
}

interface IncreaseLink {
  type: typeof INCREASE_LINK;
  meta: {
    oldLink: string;
  }
}

interface ResetRecent{
  type: typeof RESET_RESENT;
}

export type ListActionType = AddEntry | DeleteEntry | IncreaseLink | ResetRecent;