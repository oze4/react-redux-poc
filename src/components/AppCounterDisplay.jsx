import React from 'react';
import { withCounterState } from '../redux/containers';


function AppCounterDisplay(props) {
    return <p>{props.count}</p>
}

export default withCounterState(AppCounterDisplay);