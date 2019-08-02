import { INCREMENT_COUNT, DECREMENT_COUNT } from '../actions/types.js';

let defaultState = {
    count: 0,
    blah: 'meh',
}

export default function countReducer(state = defaultState, action) {
    switch(action.type) {
        case INCREMENT_COUNT:
            return { ...state, count: state.count + 1 }
        case DECREMENT_COUNT:
            return { ...state, count: state.count - 1 }
        default:
            return state;
    }
}