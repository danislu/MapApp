
import { TRACK } from './../constants/actionTypes';
import initialState from './../constants/initialState';

export default function track(track = initialState.track, action) {
    switch (action.type){
        case TRACK:
            return action.track;
        default:
            return track;
    }
}
