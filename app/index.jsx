// index.jsx
 
import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link, Redirect } from 'react-router'
import { Provider } from 'react-redux';

import MapAppRoot from './components/mapAppRoot';
import MainView from './components/mainView';
import MapView from './components/mapView';
import About from './components/about';

import Store from './store';

ReactDOM.render(
  <Provider store={Store}>
    <Router>
      <Route path="" component={MapAppRoot}>
        <Route path="/about" component={About} />
        <Route path="/map" component={MapView} />
        <Route path="/*" component={MainView} />
      </Route>
    </Router>
  </Provider>
, document.getElementById('root'));