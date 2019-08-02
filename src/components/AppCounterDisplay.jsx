import React from 'react';
import { withMapStateToProps } from '../redux/containers';


function AppCounterDisplay(props) {
    return <p>{props.count}</p>
}

export default withMapStateToProps(AppCounterDisplay);