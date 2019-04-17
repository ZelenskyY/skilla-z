import React from 'react';
import ReactDOM from 'react-dom';
import store from './store'
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import './style/style.scss'
import AppContainer from './components/AppContainer';

store.subscribe(() => localStorage.setItem('stateApp', JSON.stringify(store.getState())))

ReactDOM.render(
  <Provider store={store}>
    <Router >
      <AppContainer />
    </Router>
  </Provider >,
  document.getElementById("app")
);

