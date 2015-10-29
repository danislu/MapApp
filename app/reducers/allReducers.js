import { compose, combineReducers } from 'redux';

import points from './pointReducer';
import center from './centerReducer';
import track from './trackReducer';

const mapApp = combineReducers({
    points,
    center,
    track
});

export default mapApp;

