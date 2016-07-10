import { 
    ADD_POINT, 
    REMOVE_POINT, 
    SET_CENTER, 
    TRACK, 
    TOGGLE_SIDEBAR, 
    SET_ZOOM,
    SELECTED_DATE,
    ADD_IMAGE_TO_DATE,
    REMOVE_IMAGE_FROM_DATE } from './constants/actionTypes';

export function addImageToDate(image, date) {
    return {
        type: ADD_IMAGE_TO_DATE,
        date: date,
        imageUrl: image
    };
}

export function removeImageFromDate(date) {
    return {
        type: REMOVE_IMAGE_FROM_DATE,
        date: date
    };
}

export function selectedDateChanged(date) {
    return {
        type: SELECTED_DATE,
        newDate: date
    }
}

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

export function setZoom(zoom){
    return {
        type: SET_ZOOM,
        zoom: zoom
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
