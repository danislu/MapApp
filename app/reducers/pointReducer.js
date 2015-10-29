import { ADD_POINT, REMOVE_POINT, } from './../constants/actionTypes';
import initialState from './../constants/initialState';

export default function points(points = initialState.points, action){
    switch (action.type) {
        case ADD_POINT:
            return [...points, action.point];
        case REMOVE_POINT:
            let array = points.slice();
            if (action.index < 0) {
                throw new Error(`Cannot remove indices lower then zero. Current index: ${action.index}`);
            }
            array.splice(action.index, 1);
            return array;
        default:
            return points;
    }
}