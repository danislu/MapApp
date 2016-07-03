// index.jsx

import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute } from 'react-router'
import { Provider } from 'react-redux';
import { syncHistory, routeReducer } from 'redux-simple-router'

import RootContainer from './containers/rootContainer';
import CalendarContainer from './containers/calendarContainer';
import Home from './components/Home';
import MapViewContainer from './containers/mapViewContainer';
import About from './components/About';

import Store, {bh} from './store';

ReactDOM.render(
  <Provider store={Store}>
    <Router history={bh}>
      <Route path="/" component={RootContainer}>
        <IndexRoute component={Home} />
        <Route path="map" component={MapViewContainer} />
        <Route path="cal" component={CalendarContainer} />
        <Route path="about" component={About} />
      </Route>
    </Router>
  </Provider>
, document.getElementById('app'));

