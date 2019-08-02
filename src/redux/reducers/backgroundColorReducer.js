import { CHANGE_BACKGROUND_COLOR } from '../actions/types.js';
import { randomRgb } from '../../helpers.js';


let defaultState = {
    backgroundColor: randomRgb()
}

export default function backgroundColorReducer(state = defaultState, action) {
    switch(action.type) {
        case CHANGE_BACKGROUND_COLOR:
            return { ...state, backgroundColor: randomRgb() }
        default:
            return state;
    }
}