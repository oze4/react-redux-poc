import React from 'react';
import { withCounterState } from '../redux/containers';


let style = {
    textAlign: "center",
    fontSize: "100px",
    margin: 0,
}

function AppCounterDisplay(props) {
    return <p style={style}>{props.count}</p>
}

export default withCounterState(AppCounterDisplay);