import React, { FunctionComponent, useState, useEffect } from 'react'

import { addEntry, deleteEntry, increaseLink, resetResent } from '../store/actions'
import { AppStore } from '../store'
import { EntryState, Entry } from '../store/types'
import { connect } from "react-redux";

// components
import App from './App'

interface AppProps {
  store: EntryState;
  addEntry: (entry: Entry) => void;
  deleteEntry: (oldLink: string) => void;
  increaseLink: (oldLink: string) => void;
  resetResent: () => void
}

const AppContainer: FunctionComponent<AppProps> = ({
  store, addEntry, deleteEntry, increaseLink, resetResent
}) => {
  const [warnMsg, changeWarnMsg] = useState(false)

  // create fake link
  const link = (): string => {
    const start = 'http://fake.go/'
    const rendiomChar = (): string => {
      const charCode = Math.floor((Math.random() * 74) + 48)
      if ((charCode < 58) || (charCode > 64) &&
        (charCode < 91) || (charCode > 96)) {
        return String.fromCharCode(charCode)
      }
      else {
        return rendiomChar()
      }
    }
    return start + Array(7).fill(undefined).map(() => rendiomChar()).join('')
  }

  //check input
  const isUrl = (entry: string): boolean => {
    const expression = /[-a-zA-Z0-9@:%_\+.~#?&//=]{2,256}\.[a-z]{2,4}\b(\/[-a-zA-Z0-9@:%_\+.~#?&//=]*)?/gi;
    const regex = new RegExp(expression)
    return regex.test(entry)
  }

  // handle form button, creat link element and record to store
  const handleForm = (e: React.FormEvent, inputVal: string) => {
    e.preventDefault()
    if (isUrl(inputVal)) {
      changeWarnMsg(false)
      addEntry({
        oldLink: inputVal,
        newLink: link(),
        follow: 0,
        recent: true
      })
    }
    else {
      changeWarnMsg(true)
    }
  }

  // filtered list by 'recent'
  const recentList = (): Entry[] => store.entries.filter(entry => entry.recent === true)

  // hendler CreateLink component
  const unmountHook = () => resetResent()

  return <App handleForm={handleForm}
    listEntries={store.entries}
    recentList={recentList()}
    warnMsg={warnMsg}
    deleteEntry={deleteEntry}
    increaseLink={increaseLink}
    unmountHook={unmountHook} />
}

const mapStateToProps = (state: AppStore) => ({
  store: state
})

export default connect(mapStateToProps, { addEntry, deleteEntry, increaseLink, resetResent })(AppContainer)

