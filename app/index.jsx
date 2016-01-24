// index.jsx
 
import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link, Redirect, hashHistory } from 'react-router'
import { Provider } from 'react-redux';

import RootContainer from './containers/rootContainer';
import MainView from './components/mainView';
import MapViewContainer from './containers/mapViewContainer';
import About from './components/about';

import Store from './store';

ReactDOM.render(
  <Provider store={Store}>
    <Router history={hashHistory}>
      <Route path="" component={RootContainer}>
        <Route path="/home" component={MainView} />
        <Route path="/map" component={MapViewContainer} />
        <Route path="/about" component={About} />
        <Redirect from="/*" to="/home" />
      </Route>
    </Router>
  </Provider>
, document.getElementById('root'));