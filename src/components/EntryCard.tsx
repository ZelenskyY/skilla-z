import React, { FunctionComponent } from 'react'
import { Entry } from '../store/types'
// import { deleteEntry } from '../store/actions';

interface PropsEntryCard {
  oldLink: Entry['oldLink'];
  newLink: Entry['newLink']
  follow: Entry['follow'];
  deleteEntry: (oldLink: string) => void;
  increaseLink: (oldLink: string) => void;
}

const EntryCard: FunctionComponent<PropsEntryCard> =
  ({ oldLink, newLink, follow, deleteEntry, increaseLink }) =>
    (<div className="card-link">
      <div className="card-link__field old-link"><a href="oldLink" className="old-link__link">{oldLink}</a></div>
      <div className="card-link__field new-link">
        <a href="" className="new-link__link"
          onClick={e => {
            e.preventDefault()
            increaseLink(oldLink)
          }}
        >{newLink}</a>
        <button className="btn btn--to-right"
          onClick={e => {
            deleteEntry(oldLink)
          }}>del</button>
        <span className="new__link__clicked">{follow}</span>
      </div>
    </div>)

export default EntryCard