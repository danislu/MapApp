import { compose, combineReducers } from 'redux';

import points from './pointReducer';
import center from './centerReducer';
import zoom from './zoomReducer';
import track from './trackReducer';
import ui from './uiReducer';
import calendar from './calendarReducer';

import { routeReducer, UPDATE_LOCATION } from 'redux-simple-router'

const reducers = {
    points,
    center,
    zoom,
    track,
    ui,
    calendar
};

const mapApp = combineReducers(
    Object.assign({}, reducers, {
        routing: routeReducer
    })
);

export default mapApp;
