import { INCREMENT_COUNT, DECREMENT_COUNT } from './types.js';


export const incrementCount = () => ({
    type: INCREMENT_COUNT,
});

export const decrementCount = () => ({
    type: DECREMENT_COUNT,
})