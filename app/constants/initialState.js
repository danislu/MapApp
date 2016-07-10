
export const ActiveScreenMap = "map";
export const ActiveScreenSettings = "settings";

const initialState = {
    points: [],
    center: {
        x: -25.363882,
        y: 131.044922
    },
    zoom: 3,
    track: false,
    ui: {
        sidebar: {
            open: false,
            //activeScreen: ActiveScreenMap
        }
    },
    calendar: {
        dates: {},
        selected: new Date()
    }
}

//defaultCenter={{lat: -25.363882, lng: 131.044922}}

export default initialState;