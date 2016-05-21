import { compose, combineReducers } from 'redux';

import points from './pointReducer';
import center from './centerReducer';
import zoom from './zoomReducer';
import track from './trackReducer';
import ui from './uiReducer';

import { routeReducer, UPDATE_LOCATION } from 'redux-simple-router'

/*function update(state = '', action) {
    switch(action.type) {
        case UPDATE_LOCATION:
            console.log('UPDATE_LOCATION: ' + state);
            break;
    }
    return state;
}*/

const reducers = {
    points,
    center,
    zoom,
    track,
    ui
    //, update
};

const mapApp = combineReducers(
    Object.assign({}, reducers, {
        routing: routeReducer
    })
);

export default mapApp;
