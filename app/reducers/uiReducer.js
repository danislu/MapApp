import { TOGGLE_SIDEBAR } from './../constants/actionTypes';
import initialState from './../constants/initialState';

export default function ui(ui = initialState.ui, action) {
    switch (action.type) {
        case TOGGLE_SIDEBAR:
            return { sidebar: {open : action.open } };
        default:
            return ui;
    }
}