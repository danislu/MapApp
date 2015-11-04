// index.jsx
 
import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link, Redirect } from 'react-router'

import MapAppRoot from './components/mapAppRoot';
import MainView from './components/mainView';
import About from './components/about';

ReactDOM.render(
  <Router>
    <Route path="" component={MapAppRoot}>
      <Route path="/about" component={About} />
      <Route path="/*" component={MainView} />
    </Route>
  </Router>
, document.getElementById('root'));