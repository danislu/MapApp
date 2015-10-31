
export const ActiveScreenMap = "map";
export const ActiveScreenSettings = "settings";

const initialState = {
    points: [],
    center: {
        x: 0,
        y: 0
    },
    track: false,
    ui: {
        sidebar: {
            open: false,
            //activeScreen: ActiveScreenMap
        }
    }
}

export default initialState;