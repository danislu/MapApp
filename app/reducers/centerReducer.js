import { SET_CENTER } from './../constants/actionTypes';
import initialState from './../constants/initialState';

export default function center(center = initialState.center, action) {
    switch (action.type) {
        case SET_CENTER:
            return action.point;
        default:
            return center;
    }
}
