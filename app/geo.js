
function successCallback(pos){
    var crd = pos.coords;
    
    console.log('Your current position is:');
    console.log('Latitude : ' + crd.latitude);
    console.log('Longitude: ' + crd.longitude);
    console.log('More or less ' + crd.accuracy + ' meters.');
}

const PERMISSION_DENIED = 1;
const POSITION_UNAVAILABLE = 2;
const TIMEOUT = 3;

function errorCallback(error){
    switch(error.code){
        case PERMISSION_DENIED:
            console.log('No. Access denied: ' + error.message)
        case POSITION_UNAVAILABLE:
            console.log('No. Cant do it: ' + error.message)
        case TIMEOUT:
            console.log('No. Timed out: ' + error.message)
        default:
            console.log(error);
    }
}

export default function getLocation() {
    if (!window.navigator) {
        console.log('Not supported');
        return;
    }
    
    window.navigator.geolocation.getCurrentPosition(successCallback, errorCallback);
}