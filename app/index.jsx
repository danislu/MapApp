// index.jsx

import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute } from 'react-router'
import { Provider } from 'react-redux';
import { syncHistory, routeReducer } from 'redux-simple-router'

import RootContainer from './containers/rootContainer';
import MainView from './components/mainView';
import MapViewContainer from './containers/mapViewContainer';
import About from './components/about';

import Store, {bh} from './store';

ReactDOM.render(
  <Provider store={Store}>
    <Router history={bh}>
      <Route path="/" component={RootContainer}>
        <IndexRoute component={MainView} />
        <Route path="map" component={MapViewContainer} />
        <Route path="about" component={About} />
      </Route>
    </Router>
  </Provider>
, document.getElementById('root'));


//<Redirect from="/*" to="/home" />
