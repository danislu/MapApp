// index.jsx
 
import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link, Redirect } from 'react-router'
import { Provider } from 'react-redux';

import RootContainer from './containers/rootContainer';
import MainView from './components/mainView';
import MapViewContainer from './containers/mapViewContainer';
import About from './components/about';

import Store from './store';

ReactDOM.render(
  <Provider store={Store}>
    <Router>
      <Route path="" component={RootContainer}>
        <Route path="/about" component={About} />
        <Route path="/map" component={MapViewContainer} />
        <Route path="/*" component={MainView} />
      </Route>
    </Router>
  </Provider>
, document.getElementById('root'));