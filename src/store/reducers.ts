import {
  ADD_ENTRY, DELETE_ENTRY, RESET_RESENT,
  EntryState, INCREASE_LINK, ListActionType
} from './types'



const listReduser = (state: EntryState = { entries: [] }, actions: ListActionType): EntryState => {
  switch (actions.type) {
    case ADD_ENTRY:
      const index = state.entries
        .findIndex(entry =>
          entry.oldLink === actions.payload.oldLink)

      if (index === -1) {
        return { entries: [...state.entries, actions.payload] }
      }
      else {
        return {
          entries: state.entries.map((entry, i) => {
            if (i === index) {
              entry.recent = true
            }
            return entry
          })
        }
      }
    case DELETE_ENTRY:
      return { entries: state.entries.filter(entry => entry.oldLink !== actions.meta.oldLink) }
    case INCREASE_LINK:
      return {
        entries: state.entries.map(entry => {
          entry.oldLink === actions.meta.oldLink ? entry.follow++ : entry
          return entry
        })
      }
    case RESET_RESENT:
      return { entries: state.entries.map(entry => ({ ...entry, recent: false })) }
    default: return state
  }
}

export default listReduser