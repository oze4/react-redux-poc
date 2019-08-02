import { incrementCount, decrementCount } from '../actions';


export default function mapDispatchToProps(dispatch) {
    return {
        onIncrementCount: () => {
            dispatch(incrementCount());
        },
        onDecrementCount: () => {
            dispatch(decrementCount());
        }
    }
}