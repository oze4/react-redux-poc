import React, { useState } from 'react';
import { withCounterDispatch, withBackgroundColorDispatch } from '../redux/containers';


function AppCounter(props) {
    const [countValue, setCountValue] = useState('');

    const handleSetCountInput = (event) => {
        let val = event.target.value.replace(/[^0-9]/g, ""); // removes everything but numbers
        setCountValue(val);
    }

    const handleSetCount = () => {
        props.onSetCount(countValue);
        setCountValue('');
    }

    return (
        <div style={{ textAlign: "center" }}>
            <h1>{props.title}</h1>
            <button onClick={props.onDecrementCount}>Decrement (-)</button>
            <button onClick={props.onIncrementCount}>Increment (+)</button>
            <button onClick={""}>Reset Count</button>
            <div>
                <button disabled={countValue ? false : true} onClick={handleSetCount}>Set Count</button>
                <input value={countValue} onChange={handleSetCountInput} />
            </div>
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