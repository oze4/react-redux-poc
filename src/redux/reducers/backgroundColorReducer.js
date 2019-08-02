import { CHANGE_BACKGROUND_COLOR } from '../actions/types.js';


function randomRgb() {
    let rando = () => Math.floor(Math.random() * 255);
    return `rgb(${rando()}, ${rando()}, ${rando()})`
}

let defaultState = {
    backgroundColor: randomRgb()
}

export default function backgroundColorReducer(state = defaultState, action) {
    switch(action.type) {
        case CHANGE_BACKGROUND_COLOR:
            return { ...state,
                backgroundColor: randomRgb()
            }
        default:
            return state;
    }
}