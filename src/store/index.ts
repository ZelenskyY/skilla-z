import { createStore } from 'redux'
import listReduser from './reducers'
import { EntryState } from './types'

const stateInit: EntryState = localStorage.getItem('stateApp') ?
  JSON.parse(localStorage.getItem('stateApp') as string) : 
  { entries: []}

const store = createStore(listReduser, stateInit)

export type AppStore = ReturnType<typeof listReduser>

export default store

