import { SET_ZOOM } from './../constants/actionTypes';
import initialState from './../constants/initialState';

export default function zoom(zoom = initialState.zoom, action) {
    switch (action.type) {
        case SET_ZOOM:
            return action.zoom;
        default:
            return zoom;
    }
}