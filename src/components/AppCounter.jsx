import React from 'react';
import { withMapDispatchToProps, withMapStateToProps } from '../redux/containers';


function AppCounter(props) {
    console.log(props);
    return (
        <div style={{ margin: '100px' }}>
            <h1>{props.title}</h1>
            <button onClick={props.onIncrementCount}>Increment</button>
            <button onClick={props.onDecrementCount}>Decrement</button>
            <p>{props.count}</p>
        </div>
    )
}


export default withMapStateToProps(
    withMapDispatchToProps(
        AppCounter
    )
);