import { 
    INCREMENT_COUNT, 
    DECREMENT_COUNT,
    RESET_COUNT,
    SET_COUNT,
    CHANGE_BACKGROUND_COLOR 
} from './types.js';


export const incrementCount = () => ({
    type: INCREMENT_COUNT,
});

export const decrementCount = () => ({
    type: DECREMENT_COUNT,
});

export const changeBackgroundColor = () => ({
    type: CHANGE_BACKGROUND_COLOR
});

export const resetCount = () => ({
    type: RESET_COUNT
})

export const setCount = (value) => ({
    type: SET_COUNT,
    payload: value
});