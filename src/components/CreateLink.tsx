import React, { FunctionComponent, useState, useEffect } from 'react';
import ListEntrys from './ListEntrys'
import { Entry } from '../store/types'

interface CreateLinkProps {
  warnMsg: boolean;
  handleForm: (e: React.SyntheticEvent, inputVal: string) => void;
  recentList: Entry[];
  unmountHook: () => void;
  deleteEntry: (oldLink: string) => void;
  increaseLink: (oldLink: string) => void;
}

const CreateLink: FunctionComponent<CreateLinkProps> = ({
  warnMsg, handleForm, deleteEntry,
  recentList, unmountHook, increaseLink }) => {

  let input: HTMLInputElement

  // unmount hook
  useEffect(() => {
    return () => {
      unmountHook()
    };
  }, [])

  return (
    <>
      < div className="url-field" >
        <form className="url-field__form"
          onSubmit={e => {
            handleForm(e, (input as HTMLInputElement).value);
            (input as HTMLInputElement).value = ''
          }
          } >
          <input className="url-field__form__input"
            ref={node => (input = node as HTMLInputElement)} type="text" />
          <input className="url-field__form__submit btn btn--input" type="submit" value="сылку" />
        </form>
        {warnMsg && <span className="url-field__msg">не верный ввод</span>}
      </div >
      <ListEntrys
        increaseLink={increaseLink}
        deleteEntry={deleteEntry}
        listEntryes={recentList} />
    </>
  )
}

export default CreateLink