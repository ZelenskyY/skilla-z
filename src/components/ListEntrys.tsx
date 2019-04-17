import React, { FunctionComponent } from 'react'
import { EntryState } from '../store/types'
import EntryCard from './EntryCard'

interface PropsListEntrys {
  listEntryes: EntryState['entries'];
  deleteEntry: (oldLink: string) => void;
  increaseLink: (oldLink: string) => void;
}

const ListEntrys: FunctionComponent<PropsListEntrys> =
  ({ listEntryes, deleteEntry, increaseLink }) => (
    <>
      {listEntryes.map(entry => <EntryCard
        key={entry.newLink}
        oldLink={entry.oldLink}
        newLink={entry.newLink}
        follow={entry.follow}
        increaseLink={increaseLink}
        deleteEntry={deleteEntry} />)}
    </>
  )

export default ListEntrys