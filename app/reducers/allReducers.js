import { compose, combineReducers } from 'redux';

import points from './pointReducer';
import center from './centerReducer';
import zoom from './zoomReducer';
import track from './trackReducer';
import ui from './uiReducer';

const mapApp = combineReducers({
    points,
    center,
    zoom,
    track,
    ui
});

export default mapApp;

