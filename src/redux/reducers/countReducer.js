import { INCREMENT_COUNT, DECREMENT_COUNT, SET_COUNT } from '../actions/types.js';

let defaultState = {
    count: 0,
    blah: 'meh',
}

export default function countReducer(state = defaultState, action) {
    switch(action.type) {
        case INCREMENT_COUNT:
            return { ...state, count: Number(state.count) + 1 }
        case DECREMENT_COUNT:
            return { ...state, count: Number(state.count) - 1 }
        case SET_COUNT:
            return { ...state, count: Number(action.payload) }
        default:
            return state;
    }
}