import { ADD_POINT, REMOVE_POINT, SET_CENTER, TRACK, TOGGLE_SIDEBAR } from './constants/actionTypes';

export function addRandomPoint() {
    let x = getRandomIntInclusive(1, 10);
    let y = getRandomIntInclusive(1, 10);
    return addPoint(x,y);
}

export function addPoint(x,y) {
    return {
        type: ADD_POINT,
        point: {
            x: x,
            y: y
        }
    };
}

export function removePoint(index) {
    return {
        type: REMOVE_POINT,
        index: index
    };
}

export function setCenter(x,y){
    return {
        type: SET_CENTER,
        point: { x: x, y: y }
    };
}

export function startTracking(){
    return setTracking(true);
}

export function endTracking(){
    return setTracking(false);
}

function setTracking(tracking){
    return {
        type: TRACK,
        track: tracking
    }
}

function getRandomIntInclusive(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
} 

export function setRandomCenter() {
    return {
        type: SET_CENTER,
        point: { x: getRandomIntInclusive(1,10), y: getRandomIntInclusive(1,10) }
    };
}

export function setSidebarOpen(isOpen) {
    return {
        type: TOGGLE_SIDEBAR,
        open: isOpen
    };
}
