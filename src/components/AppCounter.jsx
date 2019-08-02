import React from 'react';
import { withMapDispatchToProps } from '../redux/containers';


function AppCounter(props) {
    console.log(props);
    return (
        <div>
            <h1>{props.title}</h1>
            <button onClick={props.onIncrementCount}>Increment</button>
            <button onClick={props.onDecrementCount}>Decrement</button>
        </div>
    )
}


export default withMapDispatchToProps(AppCounter);