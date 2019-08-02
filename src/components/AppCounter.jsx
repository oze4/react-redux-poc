import React from 'react';
import { withCounterDispatch, withBackgroundColorDispatch } from '../redux/containers';


function AppCounter(props) {
    console.log(props);
    return (
        <div>
            <h1>{props.title}</h1>
            <button onClick={props.onIncrementCount}>Increment</button>
            <button onClick={props.onDecrementCount}>Decrement</button>
            <div>
                <button onClick={props.onChangeBackgroundColor}>Change Background</button>
            </div>
        </div>
    )
}


export default withCounterDispatch(
    withBackgroundColorDispatch(
        AppCounter
    )
);