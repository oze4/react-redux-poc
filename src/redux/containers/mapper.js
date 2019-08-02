import { 
    incrementCount, decrementCount, changeBackgroundColor, setCount,
    resetCount,
} from '../actions';


export function mapCounterDispatchToProps(dispatch) {
    return {
        onIncrementCount: () => {
            dispatch(incrementCount());
        },
        onDecrementCount: () => {
            dispatch(decrementCount());
        },
        onResetCount: () => {
            dispatch(resetCount());
        },
        onSetCount: (value) => {
            dispatch(setCount(value));
        }
    }
}

export function mapCounterStateToProps(state) {
    return {
        // Since we are using `combineReducers`, if we want to flatten the state from each reducer,
        // we will need to destructure state for that particular reducer.
        ...state.countReducer
    }
};

export function mapBackgroundColorDispatchToProps(dispatch) {
    return {
        onChangeBackgroundColor: () => {
            dispatch(changeBackgroundColor());
        }
    }
}

export function mapBackgroundColorStateToProps(state) {
    return {
        // Since we are using `combineReducers`, if we want to flatten the state from each reducer,
        // we will need to destructure state for that particular reducer.
        ...state.backgroundColorReducer
    }
};