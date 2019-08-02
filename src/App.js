import React from 'react';
import AppCounter from './components/AppCounter';
import AppCounterDisplay from './components/AppCounterDisplay';
import { withBackgroundColorState } from './redux/containers';


function App(props) {
    return (
        <div style={{ margin: '100px', backgroundColor: props.backgroundColor }}>
            <h5 style={{ backgroundColor: 'white' }}>
                <a target="_blank" rel="noopener noreferrer" href="https://github.com/oze4/react-redux-poc">
                    GitHub Repo
                </a>
            </h5>
            <AppCounter title="Counter" />
            <AppCounterDisplay />
        </div>
    );
}

export default withBackgroundColorState(App);
