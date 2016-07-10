import { SELECTED_DATE } from './../constants/actionTypes';
import initialState from './../constants/initialState';

export default function calendar(calendar = initialState.calendar, action) {
    return {
        selected,
        dates
    }
}

function selected(selected = initialState.calendar.selected, action){
    if (action.type === SELECTED_DATE) {
        return action.date;
    }
    return selected;
}

function dates(dates = initialState.calendar.dates, action) {
    return dates;
}