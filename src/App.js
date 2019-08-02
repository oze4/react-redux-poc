import React from 'react';
import AppCounter from './components/AppCounter';
import AppCounterDisplay from './components/AppCounterDisplay';
import { withBackgroundColorState } from './redux/containers';
import { getDarkOrLightTextColorFromRgb } from './helpers.js';


const ghlinkStyle = {
    backgroundColor: 'white'
}


function App(props) {
    const styles = {
        container: {
            margin: '100px',
            backgroundColor: props.backgroundColor,
            color: getDarkOrLightTextColorFromRgb(props.backgroundColor)
        }
    }

    return (
        <div style={styles.container}>
            <h5 style={ghlinkStyle}>
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
