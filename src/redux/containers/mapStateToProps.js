export default function mapStateToProps(state) {
    return {
        // Since we are using `combineReducers`, if we want to flatten the state from each reducer,
        // we will need to destructure state for that particular reducer.
        ...state.countReducer
    }
};