import React, { FunctionComponent } from 'react'
import { Link, Switch, Route } from 'react-router-dom';

import { Entry } from '../store/types'

import CreateLink from './CreateLink'
import ListEntrys from './ListEntrys'
import { increaseLink } from '../store/actions';

interface AppProps {
  handleForm: (e: React.SyntheticEvent, inputVal: string) => void;
  warnMsg: boolean;
  recentList: Entry[];
  listEntries: Entry[];
  unmountHook: () => void;
  deleteEntry: (oldLink: string) => void;
  increaseLink: (oldLink: string) => void;
}

const App: FunctionComponent<AppProps> = ({
  handleForm, warnMsg,
  listEntries, recentList,
  unmountHook, deleteEntry,
  increaseLink
}) => (
    <>
      <Route render={props => {
        let location = props.location.pathname
        return (
          <>
            {location === '/' && < div className="hero"></div>}
            <div className="header">
              <div className="header__logo">logo</div>
              <div className="header__menu">
                {
                  location === '/' ? <Link to="/list">список</Link> :
                    <Link to="/">главная</Link>
                }
              </div>
            </div>
          </>
        )
      }} />

      <div className="main">
        <Switch>
          <Route path="/list" render={() =>
            <ListEntrys
              deleteEntry={deleteEntry}
              listEntryes={listEntries}
              increaseLink={increaseLink} />}>
          </Route>
          <Route to="/" exact render={() =>
            <CreateLink
              deleteEntry={deleteEntry}
              handleForm={handleForm}
              recentList={recentList}
              unmountHook={unmountHook}
              increaseLink={increaseLink}
              warnMsg={warnMsg} />}>
          </Route>
        </Switch>
      </div>
    </ >
  )

export default App;